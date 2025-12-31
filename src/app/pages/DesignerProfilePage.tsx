import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Clock, Award, Heart, Share2, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockDesigners } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function DesignerProfilePage() {
  const { id } = useParams();
  const designer = mockDesigners.find((d) => d.id === id);

  if (!designer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2">Designer not found</h2>
          <Link to="/designers">
            <Button>Back to Designers</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            <ImageWithFallback
              src={designer.avatar}
              alt={designer.name}
              className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h1>{designer.name}</h1>
                {designer.featured && (
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 w-fit mx-auto md:mx-0">
                    ⭐ Top Rated
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 mb-3">{designer.title}</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {designer.location}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {designer.rating} ({designer.reviewCount} reviews)
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Responds in {designer.responseTime}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {designer.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:min-w-[200px]">
              <Card className="p-4 text-center">
                <div className="text-2xl mb-1">{designer.hourlyRate}</div>
                <div className="text-sm text-gray-600">Hourly Rate</div>
              </Card>
              <Link to={`/proposal/${designer.id}`}>
                <Button className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Hire Now
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio" className="mt-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {designer.portfolio.map((image, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden group cursor-pointer"
                    >
                      <div className="relative aspect-[4/3]">
                        <ImageWithFallback
                          src={image}
                          alt={`Portfolio ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="about" className="mt-6">
                <Card className="p-6">
                  <h3 className="mb-4">About Me</h3>
                  <p className="text-gray-700 mb-6">{designer.description}</p>
                  
                  <h3 className="mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {designer.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="mb-4">Work Experience</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-600 pl-4">
                      <p className="text-sm text-gray-600">2020 - Present</p>
                      <p>Senior Product Designer at TechCorp</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Leading design initiatives for enterprise SaaS platform
                      </p>
                    </div>
                    <div className="border-l-2 border-gray-300 pl-4">
                      <p className="text-sm text-gray-600">2018 - 2020</p>
                      <p>UI/UX Designer at StartupHub</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Designed mobile and web applications
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <Card key={review} className="p-6">
                      <div className="flex items-start gap-4 mb-3">
                        <ImageWithFallback
                          src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150`}
                          alt="Client"
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p>John Doe</p>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              5.0
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">CEO at CompanyName</p>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Excellent work! Very professional and delivered on time. Great
                        communication throughout the project. Would definitely hire
                        again.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">2 weeks ago</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="h-4 w-4" />
                    <span className="text-sm">Completed Projects</span>
                  </div>
                  <span>{designer.completed}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="h-4 w-4" />
                    <span className="text-sm">Average Rating</span>
                  </div>
                  <span>{designer.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Response Time</span>
                  </div>
                  <span>{designer.responseTime}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4">Similar Designers</h3>
              <div className="space-y-4">
                {mockDesigners.slice(0, 3).map((similar) => (
                  <Link
                    key={similar.id}
                    to={`/designers/${similar.id}`}
                    className="flex items-center gap-3 group"
                  >
                    <ImageWithFallback
                      src={similar.avatar}
                      alt={similar.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="truncate group-hover:text-blue-600 transition-colors">
                        {similar.name}
                      </p>
                      <p className="text-sm text-gray-600 truncate">
                        {similar.title}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

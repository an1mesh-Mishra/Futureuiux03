import { Link } from 'react-router-dom';
import { Search, Briefcase, User, Award, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockJobs, mockDesigners } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function LandingPage() {
  const featuredJobs = mockJobs.filter((job) => job.featured).slice(0, 3);
  const featuredDesigners = mockDesigners.filter((d) => d.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              #1 Marketplace for UI/UX Designers
            </Badge>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
              Connect with Top{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UI/UX Designers
              </span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              The leading platform connecting talented designers with innovative
              companies. Find your perfect match today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg" className="w-full sm:w-auto">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Find Jobs
                </Button>
              </Link>
              <Link to="/designers">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <User className="mr-2 h-5 w-5" />
                  Hire Designers
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '50K+', label: 'Designers' },
              { value: '100K+', label: 'Jobs Posted' },
              { value: '98%', label: 'Success Rate' },
              { value: '4.9/5', label: 'Client Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to connect with the right talent or find your dream project
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Search className="h-10 w-10" />,
                title: 'Browse & Search',
                description: 'Explore thousands of job listings or designer profiles',
              },
              {
                icon: <User className="h-10 w-10" />,
                title: 'Connect & Discuss',
                description: 'Message and discuss project details directly',
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: 'Collaborate & Deliver',
                description: 'Work together and deliver amazing results',
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Featured Jobs</h2>
              <p className="text-gray-600">Handpicked opportunities from top companies</p>
            </div>
            <Link to="/jobs">
              <Button variant="ghost">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  ⭐ Featured
                </Badge>
                <h3 className="mb-2 line-clamp-2">{job.title}</h3>
                <p className="text-gray-600 mb-3">{job.company}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600">{job.budget}</span>
                  <Link to={`/jobs/${job.id}`}>
                    <Button size="sm">View Job</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Designers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Top Rated Designers</h2>
              <p className="text-gray-600">Work with the best in the industry</p>
            </div>
            <Link to="/designers">
              <Button variant="ghost">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDesigners.map((designer) => (
              <Card key={designer.id} className="overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1 text-sm">
                  ⭐ Top Rated
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <ImageWithFallback
                      src={designer.avatar}
                      alt={designer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="mb-1">{designer.name}</h3>
                      <p className="text-gray-600 text-sm">{designer.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                    {designer.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600">{designer.hourlyRate}</span>
                    <Link to={`/designers/${designer.id}`}>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of designers and companies already using DesignHub to
            create amazing products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Create Free Account
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Search, ListFilter } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { DesignerCard } from '../components/DesignerCard';
import { mockDesigners } from '../data/mockData';
import { Badge } from '../components/ui/badge';

export function DesignersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDesigners = mockDesigners.filter((designer) => {
    const matchesSearch =
      designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designer.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesSkill =
      selectedSkill === 'all' || designer.skills.includes(selectedSkill);
    const matchesLocation =
      selectedLocation === 'all' || designer.location.includes(selectedLocation);

    return matchesSearch && matchesSkill && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="mb-2">Find Top Designers</h1>
          <p className="text-gray-600">
            Connect with {mockDesigners.length}+ talented UI/UX designers
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-white rounded-lg border p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2">
                  <ListFilter className="h-5 w-5" />
                  Filters
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? 'Hide' : 'Show'}
                </Button>
              </div>

              <div
                className={`space-y-4 ${
                  showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden lg:block'
                }`}
              >
                {/* Skills */}
                <div>
                  <label className="text-sm mb-2 block">Primary Skill</label>
                  <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Skills" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Skills</SelectItem>
                      <SelectItem value="UI/UX">UI/UX</SelectItem>
                      <SelectItem value="Figma">Figma</SelectItem>
                      <SelectItem value="Branding">Branding</SelectItem>
                      <SelectItem value="Mobile Design">Mobile Design</SelectItem>
                      <SelectItem value="User Research">User Research</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm mb-2 block">Location</label>
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Remote">Remote</SelectItem>
                      <SelectItem value="San Francisco">San Francisco</SelectItem>
                      <SelectItem value="New York">New York</SelectItem>
                      <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                      <SelectItem value="Seattle">Seattle</SelectItem>
                      <SelectItem value="Austin">Austin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Hourly Rate */}
                <div>
                  <label className="text-sm mb-2 block">Hourly Rate</label>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: 'Under $50', count: 8 },
                      { label: '$50 - $80', count: 12 },
                      { label: '$80 - $100', count: 15 },
                      { label: '$100+', count: 10 },
                    ].map((range) => (
                      <label key={range.label} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="flex-1">{range.label}</span>
                        <span className="text-gray-500">({range.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="text-sm mb-2 block">Minimum Rating</label>
                  <div className="space-y-2 text-sm">
                    {[
                      { stars: 5, label: '5 stars', count: 8 },
                      { stars: 4, label: '4+ stars', count: 18 },
                      { stars: 3, label: '3+ stars', count: 28 },
                    ].map((rating) => (
                      <label key={rating.stars} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="flex-1">{rating.label}</span>
                        <span className="text-gray-500">({rating.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSkill('all');
                    setSelectedLocation('all');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="bg-white rounded-lg border p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search designers by name, skill, or specialty..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-gray-600">
                  Showing {filteredDesigners.length} of {mockDesigners.length}{' '}
                  designers
                </p>
              </div>
              <Select defaultValue="top-rated">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top-rated">Top Rated</SelectItem>
                  <SelectItem value="most-hired">Most Hired</SelectItem>
                  <SelectItem value="rate-high">Highest Rate</SelectItem>
                  <SelectItem value="rate-low">Lowest Rate</SelectItem>
                  <SelectItem value="response-time">Response Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedSkill !== 'all' && (
                <Badge variant="secondary" className="gap-1">
                  {selectedSkill}
                  <button onClick={() => setSelectedSkill('all')}>×</button>
                </Badge>
              )}
              {selectedLocation !== 'all' && (
                <Badge variant="secondary" className="gap-1">
                  {selectedLocation}
                  <button onClick={() => setSelectedLocation('all')}>×</button>
                </Badge>
              )}
            </div>

            {/* Designer Cards */}
            {filteredDesigners.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDesigners.map((designer) => (
                  <DesignerCard key={designer.id} designer={designer} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  No designers found matching your criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSkill('all');
                    setSelectedLocation('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

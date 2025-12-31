import { useState } from 'react';
import { Search, MapPin, DollarSign, ListFilter } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { JobCard } from '../components/JobCard';
import { mockJobs } from '../data/mockData';
import { Badge } from '../components/ui/badge';

export function JobListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesLocation =
      selectedLocation === 'all' || job.location.includes(selectedLocation);

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container px-4 md:px-6 py-8">
          <h1 className="mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">
            Browse {mockJobs.length}+ design opportunities from top companies
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
                {/* Job Type */}
                <div>
                  <label className="text-sm mb-2 block">Job Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
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
                      <SelectItem value="Austin">Austin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="text-sm mb-2 block">Budget</label>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: '$0 - $50k', count: 12 },
                      { label: '$50k - $100k', count: 24 },
                      { label: '$100k+', count: 18 },
                    ].map((range) => (
                      <label key={range.label} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="flex-1">{range.label}</span>
                        <span className="text-gray-500">({range.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="text-sm mb-2 block">Skills</label>
                  <div className="space-y-2 text-sm">
                    {['Figma', 'Sketch', 'Prototyping', 'UI Design', 'UX Research'].map(
                      (skill) => (
                        <label key={skill} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span>{skill}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
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
                    placeholder="Search jobs, companies, or skills..."
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
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-600">
                  Showing {filteredJobs.length} of {mockJobs.length} jobs
                </p>
              </div>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="relevant">Most Relevant</SelectItem>
                  <SelectItem value="budget-high">Highest Budget</SelectItem>
                  <SelectItem value="budget-low">Lowest Budget</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedType !== 'all' && (
                <Badge variant="secondary" className="gap-1">
                  {selectedType}
                  <button onClick={() => setSelectedType('all')}>×</button>
                </Badge>
              )}
              {selectedLocation !== 'all' && (
                <Badge variant="secondary" className="gap-1">
                  {selectedLocation}
                  <button onClick={() => setSelectedLocation('all')}>×</button>
                </Badge>
              )}
            </div>

            {/* Job Cards */}
            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No jobs found matching your criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
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

import { Job } from '../data/mockData';
import { MapPin, Clock, DollarSign, User } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      {job.featured && (
        <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          ⭐ Featured
        </Badge>
      )}
      
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-3">{job.company}</p>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              {job.budget}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.postedDate}
            </div>
          </div>
        </div>
        
        <Badge variant="outline">{job.type}</Badge>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.slice(0, 5).map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <User className="h-4 w-4" />
          {job.applicants} applicants
        </div>
        <Link to={`/jobs/${job.id}`}>
          <Button size="sm">Apply Now</Button>
        </Link>
      </div>
    </Card>
  );
}

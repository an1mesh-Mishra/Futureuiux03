import { Designer } from '../data/mockData';
import { MapPin, Star, Clock, Award } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DesignerCardProps {
  designer: Designer;
}

export function DesignerCard({ designer }: DesignerCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {designer.featured && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-1 text-sm">
          ⭐ Top Rated Designer
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <ImageWithFallback
            src={designer.avatar}
            alt={designer.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="mb-1 truncate">{designer.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{designer.title}</p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{designer.location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{designer.rating}</span>
            <span className="text-gray-500">({designer.reviewCount})</span>
          </div>
          <span className="text-blue-600">{designer.hourlyRate}</span>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2 text-sm">
          {designer.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {designer.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            {designer.completed} jobs
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {designer.responseTime}
          </div>
        </div>

        <div className="flex gap-2">
          <Link to={`/designers/${designer.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              View Profile
            </Button>
          </Link>
          <Button size="sm" className="flex-1">
            Contact
          </Button>
        </div>
      </div>
    </Card>
  );
}

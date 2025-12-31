import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, Calendar, DollarSign, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { mockDesigners } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

export function ProposalPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const designer = mockDesigners.find((d) => d.id === id);

  const [formData, setFormData] = useState({
    projectTitle: '',
    coverLetter: '',
    budget: '',
    timeline: '',
    startDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Proposal submitted successfully!');
    setTimeout(() => {
      navigate('/messages');
    }, 1500);
  };

  if (!designer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2">Designer not found</h2>
          <Button onClick={() => navigate('/designers')}>Back to Designers</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 md:px-6 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="mb-2">Send Proposal</h1>
          <p className="text-gray-600">Submit your project details to {designer.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="projectTitle">
                    Project Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="projectTitle"
                    placeholder="e.g., E-commerce Website Redesign"
                    value={formData.projectTitle}
                    onChange={(e) =>
                      setFormData({ ...formData, projectTitle: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="coverLetter">
                    Project Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Describe your project, goals, and what you're looking for..."
                    rows={8}
                    value={formData.coverLetter}
                    onChange={(e) =>
                      setFormData({ ...formData, coverLetter: e.target.value })
                    }
                    required
                    className="mt-1.5"
                  />
                  <p className="text-sm text-gray-500 mt-1.5">
                    Minimum 100 characters. Be clear about your requirements.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">
                      Budget <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative mt-1.5">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="budget"
                        placeholder="5000"
                        type="number"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline">
                      Timeline (weeks) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="timeline"
                      placeholder="4"
                      type="number"
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="startDate">
                    Preferred Start Date <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative mt-1.5">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({ ...formData, startDate: e.target.value })
                      }
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate(-1)}
                      className="flex-1 sm:flex-initial"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Proposal
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="mb-4">Designer Info</h3>
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback
                  src={designer.avatar}
                  alt={designer.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p>{designer.name}</p>
                  <p className="text-sm text-gray-600">{designer.title}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hourly Rate</span>
                  <span>{designer.hourlyRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span>{designer.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Projects</span>
                  <span>{designer.completed}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Tips for Success
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Be clear and detailed about your requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Set realistic timelines and budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Include relevant links or references</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span>Be professional and courteous</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="mb-2">Protection Guaranteed</h3>
              <p className="text-sm text-gray-700">
                All proposals are protected by our secure payment system. Your funds are
                held safely until you approve the work.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

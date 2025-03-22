import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c1220]/60 to-black pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-primary font-medium tracking-wider">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-3 flex flex-col md:flex-row items-center justify-center gap-3">
              <span>Ready to</span> 
              <span className="bg-gradient-to-r from-primary to-[#0EA5E9] bg-clip-text text-transparent">Collaborate?</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              Interested in working together on ambitious projects? Feel free to reach out and let's transform ideas into exceptional digital experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                <span className="h-8 w-8 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                  <i className="fas fa-id-card"></i>
                </span>
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1 shadow-lg">
                    <i className="fas fa-envelope text-primary text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-lg">Email</h4>
                    <a href="mailto:kagabolucky72@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      kagabolucky72@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center mt-1 shadow-lg">
                    <i className="fas fa-phone-alt text-[#0EA5E9] text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-lg">Phone</h4>
                    <a href="tel:+1555-123-4567" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center mt-1 shadow-lg">
                    <i className="fas fa-map-marker-alt text-[#8B5CF6] text-lg"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 text-lg">Location</h4>
                    <p className="text-gray-400">
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-800">
                <h4 className="text-white font-bold mb-4 text-lg">Connect on Social Media</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/kai-lucky72" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-black/50 hover:bg-primary/20 border border-gray-800 hover:border-primary/50 flex items-center justify-center transition-all shadow-lg hover:shadow-primary/5" 
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github text-white text-xl hover:text-primary transition-colors"></i>
                  </a>
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-black/50 hover:bg-[#0EA5E9]/20 border border-gray-800 hover:border-[#0EA5E9]/50 flex items-center justify-center transition-all shadow-lg hover:shadow-[#0EA5E9]/5" 
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-white text-xl hover:text-[#0EA5E9] transition-colors"></i>
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-black/50 hover:bg-[#8B5CF6]/20 border border-gray-800 hover:border-[#8B5CF6]/50 flex items-center justify-center transition-all shadow-lg hover:shadow-[#8B5CF6]/5" 
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-white text-xl hover:text-[#8B5CF6] transition-colors"></i>
                  </a>
                  <a 
                    href="https://medium.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-black/50 hover:bg-gray-800 border border-gray-800 flex items-center justify-center transition-all shadow-lg" 
                    aria-label="Medium"
                  >
                    <i className="fab fa-medium-m text-white text-xl hover:text-gray-300 transition-colors"></i>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-xl"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
                <span className="h-8 w-8 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-lg flex items-center justify-center">
                  <i className="fas fa-paper-plane"></i>
                </span>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-medium mb-2 block">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white font-medium mb-2 block">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white font-medium mb-2 block">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white font-medium mb-2 block">Message</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all min-h-[140px]"
                    placeholder="Your message"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-6 py-6 rounded-xl font-medium shadow-lg shadow-primary/10 transition-all w-full text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <i className="fas fa-circle-notch fa-spin"></i> SENDING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <i className="fas fa-paper-plane"></i> SEND MESSAGE
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

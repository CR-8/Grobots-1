import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = {
  1: {
    id: 1,
    title: "The Future of Robotics in Education",
    excerpt: "Exploring how robotics is transforming the way we learn and teach in modern classrooms.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Education",
    author: "Dr. Sarah Chen",
    content: `
      <p>The integration of robotics in education is revolutionizing how students learn and interact with technology. As we move further into the 21st century, the importance of STEM education continues to grow, and robotics provides an engaging way to teach these essential skills.</p>

      <h2>The Benefits of Robotics in Education</h2>
      <p>Robotics education offers numerous advantages:</p>
      <ul>
        <li>Hands-on learning experiences</li>
        <li>Development of problem-solving skills</li>
        <li>Enhanced creativity and innovation</li>
        <li>Preparation for future careers</li>
      </ul>

      <h2>Current Trends in Educational Robotics</h2>
      <p>Today's educational robotics programs are incorporating:</p>
      <ul>
        <li>AI and machine learning concepts</li>
        <li>Programming fundamentals</li>
        <li>Design thinking principles</li>
        <li>Collaborative learning approaches</li>
      </ul>

      <h2>Challenges and Solutions</h2>
      <p>While implementing robotics education can be challenging, there are several solutions available:</p>
      <ul>
        <li>Cost-effective robotics kits</li>
        <li>Online learning platforms</li>
        <li>Teacher training programs</li>
        <li>Community partnerships</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>The future of robotics in education looks promising, with new technologies and methodologies constantly emerging. As we continue to innovate, we can expect to see:</p>
      <ul>
        <li>More accessible robotics education</li>
        <li>Advanced learning platforms</li>
        <li>Integration with other subjects</li>
        <li>Global collaboration opportunities</li>
      </ul>

      <p>By embracing robotics education, we're preparing students for a future where technology and innovation will play an even more significant role in their lives and careers.</p>
    `,
  },
  // Add more blog posts here...
};

export default function Reader() {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen text-primary-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary-200 hover:text-primary-50">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-primary-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-200 hover:text-primary-50 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-primary-300 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-800/50 flex items-center justify-center">
                  {post.author[0]}
                </div>
                <div>
                  <p className="text-primary-50">{post.author}</p>
                  <p className="text-sm text-primary-300">{post.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-primary-800/50 rounded-full transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-primary-800/50 rounded-full transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </div>
  );
} 
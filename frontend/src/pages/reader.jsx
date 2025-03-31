import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { 
  Calendar, Clock, ArrowLeft, Twitter, Facebook, Linkedin, 
  MoreHorizontal, ThumbsUp, MessageCircle, BookmarkPlus
} from "lucide-react";
import PropTypes from 'prop-types';

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
    author: {
      name: "Dr. Sarah Chen",
      bio: "Robotics Educator & Researcher",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
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
    stats: {
      likes: 1234,
      comments: 89,
      bookmarks: 456,
    },
  },
  // Add more blog posts here...
};

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-200 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

const AuthorCard = ({ author }) => (
  <div className="flex items-center gap-4 p-6 bg-primary-800/30 rounded-xl border border-primary-300/10">
    <img
      src={author.image}
      alt={author.name}
      className="w-16 h-16 rounded-full object-cover"
    />
    <div>
      <h3 className="text-lg font-medium text-primary-50">{author.name}</h3>
      <p className="text-primary-300">{author.bio}</p>
    </div>
  </div>
);

AuthorCard.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const SocialShare = () => (
  <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
    <button className="p-2 hover:bg-primary-800/50 rounded-full transition-colors">
      <Twitter className="w-5 h-5" />
    </button>
    <button className="p-2 hover:bg-primary-800/50 rounded-full transition-colors">
      <Facebook className="w-5 h-5" />
    </button>
    <button className="p-2 hover:bg-primary-800/50 rounded-full transition-colors">
      <Linkedin className="w-5 h-5" />
    </button>
  </div>
);

export default function Reader() {
  const { id } = useParams();
  const post = blogPosts[id];
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen text-primary-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary-50 hover:text-primary-200">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-primary-50">
      <ReadingProgress />
      <SocialShare />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-200 hover:text-primary-50 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-primary-200 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary-50 font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-primary-50">{post.author.name}</p>
                  <p className="text-sm text-primary-300">{post.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full transition-colors ${
                    isLiked ? "text-primary-200" : "hover:bg-primary-800/50"
                  }`}
                >
                  <ThumbsUp className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-primary-800/50 rounded-full transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-full transition-colors ${
                    isBookmarked ? "text-primary-200" : "hover:bg-primary-800/50"
                  }`}
                >
                  <BookmarkPlus className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-primary-800/50 rounded-full transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
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
        <div className="container mx-auto px-4 text-primary-50 sm:px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-semibold 
                prose-h2:text-primary-50 prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-3xl prose-h2:font-semibold
                prose-h3:text-primary-50 prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-2xl prose-h3:font-semibold
                prose-p:text-primary-200 prose-p:leading-relaxed prose-p:mb-8 prose-p:text-lg
                prose-ul:my-8 prose-ul:pl-6 prose-ul:space-y-4
                prose-li:text-primary-200 prose-li:leading-relaxed prose-li:text-lg
                prose-strong:text-primary-50 prose-strong:font-semibold
                prose-a:text-primary-200 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-blockquote:border-l-4 prose-blockquote:border-primary-200 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-primary-200 prose-blockquote:my-8
                prose-code:text-primary-200 prose-code:bg-primary-800/50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-primary-800/50 prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8
                prose-img:rounded-xl prose-img:my-8 prose-img:shadow-lg
                prose-hr:border-primary-300/20 prose-hr:my-12
                [&>p:first-of-type]:text-xl [&>p:first-of-type]:text-primary-100 [&>p:first-of-type]:font-medium
                [&>p:first-of-type]:leading-relaxed [&>p:first-of-type]:mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 p-6 bg-primary-800/30 rounded-xl border border-primary-300/10"
            >
              <h3 className="text-xl font-semibold text-primary-50 mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="text-primary-200 hover:text-primary-50 transition-colors">
                    The Benefits of Robotics in Education
                  </a>
                </li>
                <li>
                  <a href="#trends" className="text-primary-200 hover:text-primary-50 transition-colors">
                    Current Trends in Educational Robotics
                  </a>
                </li>
                <li>
                  <a href="#challenges" className="text-primary-200 hover:text-primary-50 transition-colors">
                    Challenges and Solutions
                  </a>
                </li>
                <li>
                  <a href="#future" className="text-primary-200 hover:text-primary-50 transition-colors">
                    Looking Forward
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <AuthorCard author={post.author} />
            </motion.div>

            {/* Engagement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex items-center justify-between text-sm text-primary-300"
            >
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 hover:text-primary-50 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{post.stats.likes} likes</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary-50 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.stats.comments} comments</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary-50 transition-colors">
                  <BookmarkPlus className="w-4 h-4" />
                  <span>{post.stats.bookmarks} bookmarks</span>
                </button>
              </div>
              <div className="flex items-center gap-6">
                <button className="hover:text-primary-50 transition-colors">Share</button>
                <button className="hover:text-primary-50 transition-colors">Report</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 
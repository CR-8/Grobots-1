import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers, DOMAINS, YEARS, STATS } from "../constants.js";
import { 
  Linkedin, Github, Instagram, Briefcase, GraduationCap, 
  Search, Filter, ChevronDown, ChevronUp, Star, Award,
  Users, Calendar, Trophy
} from "lucide-react";
import PropTypes from 'prop-types';

const TeamSection = ({ title, members, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2 className="text-3xl font-light text-primary-200 mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden backdrop-blur-sm bg-primary-800/50 border border-primary-300/10 hover:border-primary-300/30 transition-all duration-300">
              <div className="relative w-full h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a1a1a&color=fff`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="backdrop-blur-sm bg-primary-800/90 rounded-lg p-4 border border-primary-300/10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-primary-50">{member.name}</h3>
                  {member.achievements.length > 0 && (
                    <Star className="text-primary-300" size={16} />
                  )}
                </div>
                <p className="text-sm text-primary-300 mb-2">{member.role}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {member.domain.map((domain, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-primary-700/50 text-primary-200">
                      {domain}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 text-sm text-primary-300">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={14} />
                    <span>{member.education.degree} - {member.education.branch}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} />
                    <span>
                      {member.currentStatus.employed 
                        ? `${member.currentStatus.designation} at ${member.currentStatus.company}`
                        : "Currently Studying"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-primary-300/10">
                  <span className="text-sm text-primary-300">{member.batch}</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-50 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-50 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-50 transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    domain: PropTypes.arrayOf(PropTypes.string).isRequired,
    education: PropTypes.shape({
      degree: PropTypes.string.isRequired,
      branch: PropTypes.string.isRequired,
    }).isRequired,
    currentStatus: PropTypes.shape({
      employed: PropTypes.bool.isRequired,
      company: PropTypes.string,
      designation: PropTypes.string,
    }).isRequired,
    batch: PropTypes.string.isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      instagram: PropTypes.string.isRequired,
    }).isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  delay: PropTypes.number,
};

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="backdrop-blur-sm bg-primary-800/50 rounded-lg p-4 border border-primary-300/10 hover:border-primary-300/30 transition-all duration-300"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-primary-700/30">
        <Icon className="text-primary-200" size={24} />
      </div>
      <div>
        <p className="text-2xl font-medium text-primary-50">{value}</p>
        <p className="text-sm text-primary-300">{label}</p>
      </div>
    </div>
  </motion.div>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      active
        ? "bg-primary-700/50 text-primary-50 border-primary-300/30"
        : "bg-primary-800/50 text-primary-300 border-primary-300/10 hover:border-primary-300/30"
    } border`}
  >
    {children}
  </button>
);

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Team() {
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const filteredMembers = teamMembers
    .filter(member => {
      const domainMatch = selectedDomain === "all" || member.domain.includes(selectedDomain);
      const yearMatch = selectedYear === "all" || member.batch.includes(selectedYear);
      const searchMatch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.domain.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return domainMatch && yearMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "role":
          return a.role.localeCompare(b.role);
        case "year":
          return b.batch.localeCompare(a.batch);
        default:
          return 0;
      }
    });

  const stats = [
    { icon: Users, value: STATS.totalMembers, label: "Total Members" },
    { icon: Calendar, value: STATS.projectsCompleted, label: "Projects Completed" },
    { icon: Trophy, value: STATS.eventsOrganized, label: "Events Organized" },
    { icon: Award, value: STATS.awards, label: "Awards Won" },
  ];

  return (
    <div className="min-h-screen text-primary-50 relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-light text-primary-200 mb-4">Our Team</h1>
          <p className="text-lg text-primary-300 max-w-2xl mx-auto mb-8">
            Meet the passionate individuals who make Grobots what it is today. From faculty coordinators to volunteers,
            each member brings unique skills and perspectives to our robotics community.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={index * 0.1} />
            ))}
          </div>

          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-300" size={20} />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-primary-800/50 border border-primary-300/10 rounded-lg pl-10 pr-4 py-2 text-primary-200 placeholder-primary-300 focus:outline-none focus:border-primary-300/30"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-800/50 border border-primary-300/10 hover:border-primary-300/30 transition-all duration-300"
            >
              <Filter size={16} />
              <span>Filters</span>
              {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-primary-800/50 border border-primary-300/10 rounded-lg px-4 py-2 text-primary-200 focus:outline-none focus:border-primary-300/30"
            >
              <option value="name">Sort by Name</option>
              <option value="role">Sort by Role</option>
              <option value="year">Sort by Year</option>
            </select>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <div className="flex flex-wrap justify-center gap-2">
                  <FilterButton
                    active={selectedDomain === "all"}
                    onClick={() => setSelectedDomain("all")}
                  >
                    All Domains
                  </FilterButton>
                  {DOMAINS.map(domain => (
                    <FilterButton
                      key={domain}
                      active={selectedDomain === domain}
                      onClick={() => setSelectedDomain(domain)}
                    >
                      {domain}
                    </FilterButton>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <FilterButton
                    active={selectedYear === "all"}
                    onClick={() => setSelectedYear("all")}
                  >
                    All Years
                  </FilterButton>
                  {Object.values(YEARS).map(year => (
                    <FilterButton
                      key={year}
                      active={selectedYear === year}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </FilterButton>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <TeamSection title="Our Team Members" members={filteredMembers} />
      </div>
    </div>
  );
} 
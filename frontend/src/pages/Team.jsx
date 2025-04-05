import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { teamMembers } from '../constants';

// Card component for individual team members
const MemberCardComponent = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <MemberCard onClick={() => setIsFlipped(!isFlipped)}>
      <CardInner isFlipped={isFlipped}>
        <CardFront>
          <CardHeader position={member.role}>
            <PositionBadge>{member.role || 'Team Member'}</PositionBadge>
          </CardHeader>
          <CardContent>
            <AvatarContainer>
              <Avatar src={member.image || 'https://via.placeholder.com/100'} alt={member.name} />
              <LevelBadge>{member.batch.split('-')[0]}</LevelBadge>
            </AvatarContainer>
            <MemberName>{member.name}</MemberName>
            <PositionText>{member.position}</PositionText>
            
            <SkillsContainer>
              {(member.domain || []).slice(0, 3).map((skill, i) => (
                <SkillTag key={i}>{skill}</SkillTag>
              ))}
              {member.domain && member.domain.length > 3 && (
                <SkillTag>+{member.domain.length - 3}</SkillTag>
              )}
            </SkillsContainer>
            
            {member.currentStatus && member.currentStatus.employed && (
              <CompanyBadge>
                {member.currentStatus.company} - {member.currentStatus.designation}
              </CompanyBadge>
            )}
            
            <SocialLinks>
              {member.social.linkedin && member.social.linkedin !== "#" && (
                <SocialIcon href={member.social.linkedin} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <i className="fa fa-linkedin"></i>
                </SocialIcon>
              )}
              {member.social.github && member.social.github !== "#" && (
                <SocialIcon href={member.social.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <i className="fa fa-github"></i>
                </SocialIcon>
              )}
              {member.social.instagram && member.social.instagram !== "#" && (
                <SocialIcon href={member.social.instagram} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                  <i className="fa fa-instagram"></i>
                </SocialIcon>
              )}
            </SocialLinks>
            <FlipHint>Click for more info</FlipHint>
          </CardContent>
        </CardFront>
        
        <CardBack>
          <BackContent>
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Batch:</strong> {member.batch}</p>
            
            <SkillsTitle>Skills</SkillsTitle>
            <FullSkillsContainer>
              {(member.domain || []).map((skill, i) => (
                <SkillTag key={i}>{skill}</SkillTag>
              ))}
            </FullSkillsContainer>
            
            {member.currentStatus && (
              <>
                <StatusTitle>Current Status</StatusTitle>
                {member.currentStatus.employed ? (
                  <StatusInfo>
                    <p><strong>Company:</strong> {member.currentStatus.company}</p>
                    <p><strong>Designation:</strong> {member.currentStatus.designation}</p>
                    {member.currentStatus.joiningDate && (
                      <p><strong>Since:</strong> {member.currentStatus
.joiningDate}</p>
                    )}
                  </StatusInfo>
                ) : (
                  <StatusInfo>
                    <p>Currently seeking opportunities</p>
                  </StatusInfo>
                )}
              </>
            )}
            
            {member.bio && (
              <>
                <BioTitle>About</BioTitle>
                <Bio>{member.bio}</Bio>
              </>
            )}
            
            <FlipHint>Click to flip back</FlipHint>
          </BackContent>
        </CardBack>
      </CardInner>
    </MemberCard>
  );
};

// Filter component with enhanced search and multi-select capabilities
const FilterComponent = ({ positions, activePosition, onPositionChange, domainSkills, activeSkills, onSkillChange, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  };
  
  return (
    <FilterContainer>
      <SearchContainer>
        <SearchInput 
          type="text" 
          placeholder="Search by name or position..." 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SearchIcon className="fa fa-search" />
      </SearchContainer>
      
      <FiltersGroup>
        <FilterSection>
          <FilterTitle>Position</FilterTitle>
          <PositionFilter>
            {positions.map(position => (
              <PositionButton 
                key={position}
                active={activePosition === position}
                onClick={() => onPositionChange(position)}
              >
                {position}
              </PositionButton>
            ))}
          </PositionFilter>
        </FilterSection>
        
        <FilterSection>
          <FilterTitle>Skills</FilterTitle>
          <SkillsFilter>
            {domainSkills.map(skill => (
              <SkillButton 
                key={skill}
                active={activeSkills.includes(skill)}
                onClick={() => onSkillChange(skill)}
              >
                {skill}
              </SkillButton>
            ))}
          </SkillsFilter>
        </FilterSection>
      </FiltersGroup>
    </FilterContainer>
  );
};

// Team grid component with animation effects
const TeamGridComponent = ({ members, isLoading }) => {
  return (
    <TeamGridContainer>
      {isLoading ? (
        <LoadingSpinner>
          <i className="fa fa-spinner fa-spin"></i>
          <p>Loading team members...</p>
        </LoadingSpinner>
      ) : members.length > 0 ? (
        <TeamGrid>
          {members.map((member, index) => (
            <FadeInItem key={member.id || index} delay={index % 10 * 0.1}>
              <MemberCardComponent member={member} />
            </FadeInItem>
          ))}
        </TeamGrid>
      ) : (
        <NoResults>
          <i className="fa fa-search"></i>
          <p>No team members match your filters</p>
          <p>Try adjusting your search criteria</p>
        </NoResults>
      )}
    </TeamGridContainer>
  );
};

// Stats component to show team metrics
const TeamStatsComponent = ({ members }) => {
  const stats = useMemo(() => {
    if (!members || !Array.isArray(members)) return {};
    
    const roles = {};
    const skills = {};
    let employedCount = 0;
    
    members.forEach(member => {
      // Count roles
      const role = member.role || 'Other';
      roles[role] = (roles[role] || 0) + 1;
      
      // Count skills
      (member.domain || []).forEach(skill => {
        skills[skill] = (skills[skill] || 0) + 1;
      });
      
      // Count employed
      if (member.currentStatus && member.currentStatus.employed) {
        employedCount++;
      }
    });
    
    return {
      total: members.length,
      roles,
      topSkills: Object.entries(skills)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5),
      employmentRate: members.length > 0 ? (employedCount / members.length) * 100 : 0
    };
  }, [members]);
  
  return (
    <StatsContainer>
      <StatCard>
        <StatNumber>{stats.total}</StatNumber>
        <StatLabel>Team Members</StatLabel>
      </StatCard>
      
      <StatCard>
        <StatNumber>{Object.keys(stats.roles || {}).length}</StatNumber>
        <StatLabel>Different Roles</StatLabel>
      </StatCard>
      
      <StatCard>
        <StatNumber>{Math.round(stats.employmentRate)}%</StatNumber>
        <StatLabel>Employment Rate</StatLabel>
      </StatCard>
      
      <TopSkillsCard>
        <StatLabel>Top Skills</StatLabel>
        <TopSkillsList>
          {(stats.topSkills || []).map(([skill, count], i) => (
            <TopSkillItem key={i}>
              <SkillName>{skill}</SkillName>
              <SkillCount>({count})</SkillCount>
              <SkillBar width={(count / stats.total) * 100} />
            </TopSkillItem>
          ))}
        </TopSkillsList>
      </TopSkillsCard>
    </StatsContainer>
  );
};

// Main Team component with enhanced filtering and state management
const Team = () => {
  const [activePosition, setActivePosition] = useState('All');
  const [activeSkills, setActiveSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);
  
  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Extract all unique domain skills
  const domainSkills = useMemo(() => {
    if (!teamMembers || !Array.isArray(teamMembers)) return [];
    
    const skills = new Set();
    teamMembers.forEach(member => {
      (member.domain || []).forEach(skill => skills.add(skill));
    });
    
    return Array.from(skills).sort();
  }, []);
  
  // Memoized grouping of members by position
  const groupedMembers = useMemo(() => {
    const grouped = {};
    if (!teamMembers || !Array.isArray(teamMembers)) return grouped;
    
    teamMembers.forEach(member => {
      const position = member.role || 'Team Member';
      if (!grouped[position]) {
        grouped[position] = [];
      }
      grouped[position].push(member);
    });
    return grouped;
  }, []);
  
  // Memoized positions list
  const positions = useMemo(() => 
    ['All', ...Object.keys(groupedMembers)].sort((a, b) => {
      if (a === 'All') return -1;
      if (b === 'All') return 1;
      return a.localeCompare(b);
    }), 
    [groupedMembers]
  );
  
  // Handle skill filter toggle
  const handleSkillToggle = (skill) => {
    setActiveSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };
  
  // Memoized filtered members based on all filters
  const filteredMembers = useMemo(() => {
    if (!teamMembers || !Array.isArray(teamMembers)) return [];
    
    return teamMembers.filter(member => {
      // Position filter
      if (activePosition !== 'All' && member.role !== activePosition) {
        return false;
      }
      
      // Skills filter
      if (activeSkills.length > 0) {
        const memberSkills = member.domain || [];
        if (!activeSkills.some(skill => memberSkills.includes(skill))) {
          return false;
        }
      }
      
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const nameMatch = member.name?.toLowerCase().includes(searchLower);
        const positionMatch = member.position?.toLowerCase().includes(searchLower);
        const companyMatch = member.currentStatus?.company?.toLowerCase().includes(searchLower);
        
        if (!nameMatch && !positionMatch && !companyMatch) {
          return false;
        }
      }
      
      return true;
    });
  }, [activePosition, activeSkills, searchTerm]);

  return (
    <TeamContainer>
      <TeamHeader>
        <h1>Our Team</h1>
        <p>Meet the amazing individuals who make our team great</p>
        <StatsToggle onClick={() => setShowStats(!showStats)}>
          {showStats ? 'Hide Stats' : 'Show Stats'} <i className={`fa fa-chart-bar ${showStats ? 'fa-rotate-180' : ''}`}></i>
        </StatsToggle>
      </TeamHeader>

      {showStats && <TeamStatsComponent members={teamMembers} />}
      
      <FilterComponent 
        positions={positions} 
        activePosition={activePosition} 
        onPositionChange={setActivePosition} 
        domainSkills={domainSkills}
        activeSkills={activeSkills}
        onSkillChange={handleSkillToggle}
        onSearchChange={setSearchTerm}
      />
      
      <ResultSummary>
        <p>
          <ResultCount>{filteredMembers.length}</ResultCount> team members found
          {activePosition !== 'All' && ` in "${activePosition}"`}
          {activeSkills.length > 0 && ` with skills in ${activeSkills.join(', ')}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
        {(activePosition !== 'All' || activeSkills.length > 0 || searchTerm) && (
          <ClearFilters onClick={() => {
            setActivePosition('All');
            setActiveSkills([]);
            setSearchTerm('');
          }}>
            Clear Filters <i className="fa fa-times"></i>
          </ClearFilters>
        )}
      </ResultSummary>
      
      <TeamGridComponent members={filteredMembers} isLoading={isLoading} />
    </TeamContainer>
  );
};

// Styled components with enhanced styles
const TeamContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #fff;
    text-shadow: 0 2px 10px rgba(108, 92, 231, 0.5);
  }
  
  p {
    font-size: 1.2rem;
    color: #ccc;
  }
`;

const StatsToggle = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(108, 92, 231, 0.2);
  color: #a29bfe;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(108, 92, 231, 0.4);
  }
  
  i {
    transition: transform 0.3s ease;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const StatCard = styled.div`
  background: rgba(30, 30, 50, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #6c5ce7;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #ccc;
  font-size: 0.9rem;
`;

const TopSkillsCard = styled(StatCard)`
  grid-column: 1 / -1;
`;

const TopSkillsList = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const TopSkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  position: relative;
`;

const SkillName = styled.span`
  flex: 1;
  color: #ddd;
  font-size: 0.9rem;
`;

const SkillCount = styled.span`
  color: #a29bfe;
  font-size: 0.8rem;
  margin-right: 1rem;
`;

const SkillBar = styled.div`
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: ${props => props.width}%;
  max-width: 100%;
  background: linear-gradient(90deg, #6c5ce7, #a29bfe);
  border-radius: 2px;
  z-index: 1;
`;

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  background: rgba(30, 30, 50, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.5);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
`;

const FiltersGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const FilterSection = styled.div``;

const FilterTitle = styled.h4`
  color: #fff;
  margin-bottom: 0.8rem;
  font-size: 1rem;
`;

const PositionFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PositionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  background-color: ${props => props.active ? '#6c5ce7' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#fff' : '#ddd'};
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.active ? '#6c5ce7' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }
`;

const SkillsFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillButton = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.3s ease;
  background-color: ${props => props.active ? 'rgba(108, 92, 231, 0.5)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#fff' : '#ddd'};
  font-size: 0.8rem;
  
  &:hover {
    background-color: ${props => props.active ? 'rgba(108, 92, 231, 0.7)' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const ResultSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  
  p {
    color: #ccc;
    font-size: 0.9rem;
  }
`;

const ResultCount = styled.span`
  color: #6c5ce7;
  font-weight: bold;
`;

const ClearFilters = styled.button`
  background: none;
  border: none;
  color: #a29bfe;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #6c5ce7;
  }
`;

const TeamGridContainer = styled.div`
  min-height: 400px;
  position: relative;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const FadeInItem = styled.div`
  animation: fadeIn 0.5s ease forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ccc;
  
  i {
    font-size: 3rem;
    color: #6c5ce7;
    margin-bottom: 1rem;
  }
`;

const NoResults = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ccc;
  
  i {
    font-size: 3rem;
    color: #a29bfe;
    margin-bottom: 1rem;
  }
  
  p:first-of-type {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p:last-of-type {
    font-size: 0.9rem;
    color: #999;
  }
`;

const MemberCard = styled.div`
  height: 380px;
  perspective: 1000px;
  cursor: pointer;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgba(30, 30, 50, 0.7);
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  ${MemberCard}:hover & {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgba(30, 30, 50, 0.9);
  border-radius: 10px;
  overflow: hidden;
  transform: rotateY(180deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
`;

const BackContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  
  h3 {
    color: #fff;
    margin-bottom: 1rem;
    border-bottom: 2px solid rgba(108, 92, 231, 0.5);
    padding-bottom: 0.5rem;
  }
  
  p {
    color: #ddd;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    
    strong {
      color: #a29bfe;
    }
  }
`;

const SkillsTitle = styled.h4`
  color: #a29bfe;
  margin: 1rem 0 0.5rem;
  font-size: 0.9rem;
`;

const StatusTitle = styled(SkillsTitle)``;
const BioTitle = styled(SkillsTitle)``;

const FullSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

const StatusInfo = styled.div`
  background: rgba(108, 92, 231, 0.1);
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;

const Bio = styled.p`
  flex: 1;
  overflow-y: auto;
  font-style: italic;
  color: #ccc !important;
  line-height: 1.4;
  padding-right: 0.5rem;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(108, 92, 231, 0.5);
    border-radius: 2px;
  }
`;

const FlipHint = styled.div`
  color: #a29bfe;
  font-size: 0.8rem;
  text-align: center;
  margin-top: auto;
  padding-top: 1rem;
`;

const CardHeader = styled.div`
  height: 60px;
  position: relative;
  background: ${props => {
    switch(props.position) {
      case 'HoD': return 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)';
      case 'Pass out': return 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)';
      case 'Developer': return 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)';
      case 'Designer': return 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)';
      default: return 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)';
    }
  }};
`;

const PositionBadge = styled.span`
  position: absolute;
  bottom: -10px;
  right: 20px;
  background-color: rgba(20, 20, 40, 0.9);
  color: #fff;
  padding: 5px 15px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const LevelBadge = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #6c5ce7;
  color: white;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const MemberName = styled.h3`
  margin: 0.5rem 0;
  color: #fff;
  font-size: 1.2rem;
`;

const PositionText = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin: 0.2rem 0 0.5rem
  margin: 0.2rem 0 0.5rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3rem;
  margin: 0.5rem 0;
`;

const SkillTag = styled.span`
  background-color: rgba(108, 92, 231, 0.2);
  color: #a29bfe;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-size: 0.7rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(108, 92, 231, 0.4);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #ddd;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #6c5ce7;
    transform: translateY(-3px);
  }
`;

const CompanyBadge = styled.div`
  background-color: rgba(108, 92, 231, 0.15);
  color: #a29bfe;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  border: 1px solid rgba(108, 92, 231, 0.3);
`;

export default Team;
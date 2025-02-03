import { teamMembers } from '../constants'
import MarqueeCard from './marquee_card'

const TeamMarquee = () => {
    return (
        <div className="relative w-full overflow-hidden py-4">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-white to-transparent" />
            
            {/* Main marquee container */}
            <div className="flex gap-4 hover:pause-animation">
                {/* First set of cards */}
                <div className="flex shrink-0 gap-4 animate-marquee">
                    {teamMembers.map((member, index) => (
                        <MarqueeCard key={`first-${index}`} {...member} />
                    ))}
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex shrink-0 gap-4 animate-marquee" aria-hidden="true">
                    {teamMembers.map((member, index) => (
                        <MarqueeCard key={`second-${index}`} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMarquee;

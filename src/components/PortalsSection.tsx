interface PortalsSectionProps {
  onOpenAuth: (portal: string) => void;
}

interface PortalCard {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  portal: string;
  isSecure: boolean;
  isHighlighted?: boolean;
}

const portals: PortalCard[] = [
  {
    icon: 'fa-user-graduate',
    title: 'Student Portal',
    description: 'Access your dashboard to register for modules and check enrollment status.',
    linkText: 'Enter Portal',
    portal: 'student',
    isSecure: false,
  },
  {
    icon: 'fa-user-shield',
    title: 'Admin Panel',
    description: 'Approve pending requests and manage capacities using Insertion Sort.',
    linkText: 'Secure Login',
    portal: 'admin',
    isSecure: true,
  },
  {
    icon: 'fa-layer-group',
    title: 'Queue Reader',
    description: 'Monitor live FIFO queues and automated Waitlist Radar systems.',
    linkText: 'Secure Login',
    portal: 'radar',
    isSecure: true,
  },
  {
    icon: 'fa-chart-pie',
    title: 'HOD Analytics',
    description: 'View demand forecasting and predictive module allocation charts.',
    linkText: 'Authorize Access',
    portal: 'hod',
    isSecure: true,
    isHighlighted: true,
  },
];

export default function PortalsSection({ onOpenAuth }: PortalsSectionProps) {
  return (
    <section id="portals" className="py-16 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h5 className="text-[#FF5E14] font-semibold text-sm tracking-wider uppercase mb-2">
            EXPLORE PORTALS
          </h5>
          <h2 className="text-[#0F2239] font-extrabold text-3xl md:text-4xl">
            Choose Your Workspace
          </h2>
          <div className="w-16 h-1 bg-[#FF5E14] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, index) => (
            <div
              key={portal.portal}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div
                className={`
                  group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm
                  hover:shadow-xl hover:-translate-y-2.5 hover:border-[#FF5E14]/30
                  transition-all duration-400 h-full relative overflow-hidden
                  ${portal.isHighlighted ? 'border-b-4 border-b-[#FF5E14]' : ''}
                `}
              >
                {/* Secure Badge */}
                {portal.isSecure && (
                  <i
                    className={`fas ${portal.isHighlighted ? 'fa-key' : 'fa-lock'} absolute top-5 right-5 text-lg ${
                      portal.isHighlighted ? 'text-[#FF5E14]' : 'text-gray-300'
                    }`}
                  ></i>
                )}

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5E14]/0 to-[#FF5E14]/0 group-hover:from-[#FF5E14]/[0.02] group-hover:to-[#FF5E14]/[0.05] transition-all duration-500 rounded-2xl pointer-events-none"></div>

                {/* Icon */}
                <div
                  className={`
                    w-[70px] h-[70px] rounded-xl flex items-center justify-center text-3xl mb-6
                    transition-all duration-300
                    ${
                      portal.isHighlighted
                        ? 'bg-[#0F2239] text-white group-hover:bg-[#FF5E14]'
                        : 'bg-[#FF5E14]/10 text-[#FF5E14] group-hover:bg-[#FF5E14] group-hover:text-white'
                    }
                  `}
                >
                  <i className={`fas ${portal.icon}`}></i>
                </div>

                {/* Content */}
                <h4 className="text-[#0F2239] font-bold text-xl mb-3">{portal.title}</h4>
                <p className="text-[#6B7385] text-sm leading-relaxed mb-6">{portal.description}</p>

                {/* Action */}
                <button
                  onClick={() => onOpenAuth(portal.portal)}
                  className={`
                    font-semibold text-sm border-b-2 border-transparent pb-0.5
                    hover:border-[#FF5E14] hover:text-[#FF5E14] transition-all duration-300
                    bg-transparent cursor-pointer
                    ${portal.isHighlighted ? 'text-[#FF5E14]' : 'text-[#0F2239]'}
                  `}
                >
                  {portal.linkText}{' '}
                  <i className={`fas ${portal.isSecure && !portal.isHighlighted ? 'fa-lock' : 'fa-arrow-right'} ml-1`}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

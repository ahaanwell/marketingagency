import { Printer, Wifi, WifiOff, Wrench } from 'lucide-react';

function ServicesCards(){
    const services = [
        {
          icon: <Printer className="w-6 h-6" />,
          title: "New Printer Setup",
          description: "Complete setup for your new printer"
        },
        {
          icon: <Wifi className="w-6 h-6" />,
          title: "Wireless Printer Setup",
          description: "Connect your printer to WiFi network"
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          title: "Fix Old Printer",
          description: "Repair and troubleshoot existing printers"
        },
        {
          icon: <WifiOff className="w-6 h-6" />,
          title: "Printer Offline ?",
          description: "Get your offline printer back online"
        }
      ];
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-8">
          {services.map((service, index) => (
            <a href='/services'
              key={index}
              className="lp-primary-bg backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-blue-700/50"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-blue-200 text-sm">
                {service.description}
              </p>
            </a>
          ))}
        </div>
    )
}

export default ServicesCards;
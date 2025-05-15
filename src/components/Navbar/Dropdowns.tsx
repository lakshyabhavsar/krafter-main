import Link from 'next/link';
import { 
  Smartphone,Globe, 
  Database, LineChart, 
  ChartBar
} from 'lucide-react';



interface DropdownProps {
  isVisible?: boolean;
  isMobile?: boolean;
}

export const ITServicesDropdown = ({ isVisible, isMobile }: DropdownProps) => {
  const dropdownClasses = isMobile
    ? 'px-4 py-4 space-y-6 max-h-[70vh] overflow-y-auto'
    : 'absolute top-full left-1/2 w-[300px] bg-white shadow-lg rounded-lg p-6 flex flex-col gap-6 z-50 transform -translate-x-1/2';

  if (!isVisible && !isMobile) return null;

  return (
    <div className={dropdownClasses}>
      {/* Mobile Application */}
      <div>
        <Link href="/services/mobile" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
          <Smartphone className="w-5 h-5 text-[#ea5e66] mt-1" />
          <div>
            <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Mobile App Development</span>
            <p className="text-[14px] text-gray-500">Complete Mobile Solutions</p>
          </div>
        </Link>
      </div>

      {/* Website */}
      <div>
        <Link href="/website" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
          <Globe className="w-5 h-5 text-[#ea5e66] mt-1" />
          <div>
            <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Website Development</span>
            <p className="text-[14px] text-gray-500">Professional Web Solutions</p>
          </div>
        </Link>
      </div>

      {/* ERP */}
      <div>
        <Link href="/services/erp" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
          <Database className="w-5 h-5 text-[#ea5e66] mt-1" />
          <div>
            <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">ERP Solutions</span>
            <p className="text-[14px] text-gray-500">Enterprise Resource Planning</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export const DataScienceDropdown = ({ isVisible, isMobile }: DropdownProps) => {
  const dropdownClasses = isMobile
    ? 'px-4 py-4 space-y-6 max-h-[70vh] overflow-y-auto'
    : 'absolute top-full left-1/2 w-[300px] bg-white shadow-lg rounded-lg p-6 flex flex-col gap-6 z-50 transform -translate-x-1/2';

  if (!isVisible && !isMobile) return null;

  return (
    <div className={dropdownClasses}>
      {/* Data Science */}
      <div>
        <Link href="/data/science" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
          <Database className="w-5 h-5 text-[#ea5e66] mt-1" />
          <div>
            <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Data Science</span>
            <p className="text-[14px] text-gray-500">Advanced Data Solutions</p>
          </div>
        </Link>
      </div>

      {/* Analytics */}
      <div>
        <Link href="/data/analytics" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
          <LineChart className="w-5 h-5 text-[#ea5e66] mt-1" />
          <div>
            <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Analytics</span>
            <p className="text-[14px] text-gray-500">Data Analytics Solutions</p>
          </div>
        </Link>
      </div>

      {/* Business Intelligence */}
      <div>
        <Link href="/data/business-intelligence" className="hover:text-[#823dd9] transition-colors duration-200 flex items-start gap-2">
          <ChartBar className="w-5 h-5 text-[#ea5e66] mt-1" />
          <div>
            <span className="text-[16px] dark:text-black hover:text-[#823dd9] font-medium">Business Intelligence</span>
            <p className="text-[14px] text-gray-500">Data-driven Insights</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
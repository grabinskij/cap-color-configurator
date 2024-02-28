import { Link } from 'react-router-dom';

export const Terms = () => {
    return (
        <div className="sticky top-0 left-0 right-0 w-full z-[9999]">
        <ul className="flex justify-center items-center bg-slate-100 text-slate-500 space-x-4">
            <li className="terms-link"><Link to="/legal-notice">Legal Notice</Link></li>
            <li className="text-stone-400">|</li>
            <li className="terms-link"><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
    </div>
    );
}
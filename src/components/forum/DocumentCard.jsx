import React, {useState} from 'react';
import { FaFileAlt, FaDownload, FaSpinner } from 'react-icons/fa';
import './DocumentCard.css';

const DocumentCard = ({ docName, docSize}) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadDocument = () => {
        setIsDownloading(true);

        // Simulate a download delay for demonstration (can be replaced with actual download logic)
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = docUrl;
            link.download = docName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsDownloading(false);
        }, 1000); // Simulate a 1-second delay
    };

    return (
        <div className="document-card">
            <div className="document-content">
                <div className="doc-icon">
                    <FaFileAlt size={40} color="#4a90e2" />
                </div>
                <div className="doc-info">
                    <p className="doc-name">{docName}</p>
                    <p className="doc-size text-muted">{docSize}</p>
                </div>
                <div className="doc-action">
                    <button 
                        className="btn btn-link text-primary" 
                        onClick={downloadDocument}
                        disabled={isDownloading}
                    >
                        {isDownloading ? <FaSpinner className="spinner" /> : <FaDownload size={20} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export {DocumentCard};

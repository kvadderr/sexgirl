import s from './CustomButton.module.scss'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    setSelectedFile: (file: any) => void;
}

const CustomButton = ({ setSelectedFile }: Props) => {

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Read the selected file as a data URL
            const reader = new FileReader();
            reader.onloadend = () => {
              // Set the data URL as the source of the img tag
              setSelectedFile(reader.result);
            };
            reader.readAsDataURL(selectedFile);
          }
    };

    return (
        <label className={s.fileInputLabel}>
            <input
                type="file"
                accept="image/*"
                className={s.fileInput}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
            <div className={s.container}>
                <FontAwesomeIcon icon={faUpload} />
                <p>Upload</p>
            </div>
        </label>
    )
}

export default CustomButton
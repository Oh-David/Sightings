import React from 'react';
import { Modal } from 'react-native';
import CameraComponent from './Camera';

interface CameraModalProps {
    isVisible: boolean;
    onClose: () => void;
  }

  const CameraModal: React.FC<CameraModalProps> = ({ isVisible, onClose }) => {  
    return (
    <Modal visible={isVisible} onRequestClose={onClose}>
      <CameraComponent />
    </Modal>
  );
};

export default CameraModal;

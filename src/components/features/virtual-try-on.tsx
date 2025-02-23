import { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';

interface VirtualTryOnProps {
  isOpen: boolean;
  onClose: () => void;
  productImage?: string;
}

export function VirtualTryOn({ isOpen, onClose, productImage }: VirtualTryOnProps) {
  const webcamRef = useRef<Webcam>(null);
  const [isCaptureMode, setCaptureMode] = useState(false);

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      // Here you would implement AR overlay logic
      console.log('Captured:', imageSrc);
    }
  }, [webcamRef]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Virtual Try-On</h2>
              
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  className="w-full h-full object-cover"
                />
                
                {productImage && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* AR overlay would go here */}
                    <img
                      src={productImage}
                      alt="Product overlay"
                      className="absolute opacity-50"
                      style={{
                        // Position would be calculated based on face detection
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleCapture}
                  className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg hover:opacity-90 transition-all"
                >
                  <Camera className="w-5 h-5" />
                  {isCaptureMode ? 'Take Photo' : 'Start Try-On'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
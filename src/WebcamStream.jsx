import { useRef, useState } from 'react';

function WebcamStream() {
  const videoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState(null);

  const startWebcam = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreaming(true);
      }
    } catch {
      setError('Camera access denied or not available.');
    }
  };

  const stopWebcam = () => {
    if (videoRef.current) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      setStreaming(false);
    }
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1em',
        borderRadius: '8px',
        maxWidth: 400,
        margin: '1em auto',
        textAlign: 'center',
      }}
    >
      {!streaming && (
        <button onClick={startWebcam} style={{ marginBottom: '1em' }}>
          Start Webcam
        </button>
      )}
      {streaming && (
        <button onClick={stopWebcam} style={{ marginBottom: '1em' }}>
          Stop Webcam
        </button>
      )}
      <div>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{
            width: '100%',
            borderRadius: '8px',
            background: '#000',
            transform: 'scaleX(-1)',
          }}
        />
      </div>
      {error && <div style={{ color: 'red', marginTop: '1em' }}>{error}</div>}
    </div>
  );
}

export default WebcamStream;

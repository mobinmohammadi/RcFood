import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';

function ZoomButtons() {
  const map = useMap();

  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 z-50">
      <button
        className="bg-white p-2 rounded shadow"
        onClick={() => map.zoomIn()}
      >
        +
      </button>
      <button
        className="bg-white p-2 rounded shadow"
        onClick={() => map.zoomOut()}
      >
        -
      </button>
    </div>
  );
}

// در MapContainer:
<MapContainer
  center={[38.0962, 46.2738]}
  zoom={13}
  style={{ height: '500px', width: '100%' }}
  zoomControl={false} // غیرفعال کردن کنترل پیش‌فرض
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; OpenStreetMap contributors'
  />
  <ZoomButtons />
</MapContainer>

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { centrals } from '../assets/data'
import { Icon } from "leaflet"

const position = [-18.862664219788716, 47.48695298027998]

export default function Map() {
    const customIcon = new Icon(
    {
        iconUrl: "https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png",
        iconSize: [30,50]
    })
  return (
    <MapContainer
        center={position}
        zoom={8}
        style={{ width:'100vw', height: '100vh' }}
    >
        <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}@2x.png?key=0Lj1V1WXnOgel0B7ROba"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {
            centrals.map((central) => {
                const coordonnees = [central.coordonates.lat, central.coordonates.long]
                return(
                    <Marker
                        key={central.id}
                        position={coordonnees}
                        icon={customIcon}
                        >
                        <Popup>
                        <img
                            src= {central.url}
                            alt={central.nom}
                            style={{ width: '100%' }}
                        />
                            <h2>{central.nom}</h2>
                            <p>{central.location}</p>
                            <ul>
                                <li>{central.river}</li>
                                <li>{central.type}</li>
                                <li>{central.capacity}</li>
                                <li>{central.construction}</li>
                            </ul>
                        </Popup>
                    </Marker>
                )
            })
        }
    </MapContainer>
  )
}


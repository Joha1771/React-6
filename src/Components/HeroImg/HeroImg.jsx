import React from "react";

function RoomCard({ imageSrc, roomName }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg border-2 border-gray-300 hover:border-orange-500 transition-colors duration-300">
        {/* Room Image */}
        <div className="aspect-square">
          {/* Insert room image here */}
          <img
            src={imageSrc}
            alt={roomName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Room Label */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 py-3">
          <h3 className="text-center text-lg font-semibold text-gray-900">
            {roomName}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default RoomCard;

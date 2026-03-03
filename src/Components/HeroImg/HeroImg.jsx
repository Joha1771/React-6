import React from "react";

function RoomCard({ imageSrc, roomName }) {
  return (
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden transition-colors duration-300 border-2 border-gray-300 rounded-lg hover:border-orange-500">
        <div className="aspect-square">
          <img
            src={imageSrc}
            alt={roomName}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Room Label */}
        <div className="absolute bottom-0 left-0 right-0 py-3 bg-white border-t-2 border-gray-300">
          <h3 className="text-lg font-semibold text-center text-gray-900">
            {roomName}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default RoomCard;

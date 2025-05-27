import React from 'react';

const TeamMemberCard = ({ name, title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Image or Placeholder */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center mb-4">
          {/* Placeholder icon or initial if needed */}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
};

export default TeamMemberCard; 
import React, { useEffect, useState } from 'react';

const Avatar = () => {
  const [pic, setPic] = useState(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();

        setPic(data.results[0].picture.large);

        if (!res.ok) {
          throw new Error('Failed to fetch avatar');
        }
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    fetchAvatar();
  }, []);

  return <img src={pic} alt="Avatar" className="rounded-full" />;
};

export default Avatar;

import React, {useState, createContext} from 'react';

export const UserContext = createContext();
export const UserProvider = props => {
  const userData = [
    {
      name: 'Jamie Vardy',
      description: 'Harry likes to play football alot',
      image:
        'https://www.sportbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.sportbible.com%2Fs3%2Fcontent%2F5281e083568af6ece77abdc53bc62341.jpg',
    },
    {
      name: 'John Willson',
      description: 'John is a software engineer',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYlSm3ag8sY4Vpp0Ziqc_5OjU7HeJw-Y9BQ&usqp=CAU',
    },
    {
      name: 'Nina Dobrev',
      description: 'Nina is a great hollywood actress',
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/nina-dobrev-21985-10-10-2016-06-26-39.jpg',
    },
    {
      name: 'Berk Atan',
      description: 'Berk is famous as a popular turkish series hero',
      image: 'https://data.whicdn.com/images/217938656/original.jpg',
    },
  ];
  const [users, setUsers] = useState(userData);
  const [closeFriends, setCloseFriends] = useState([]);
  const [Others, setOthers] = useState([]);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        closeFriends,
        setCloseFriends,
        Others,
        setOthers,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

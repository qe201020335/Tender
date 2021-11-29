const getUser = (id) => {
  if (id === "123") {
    return ({ name: "Alice",
      favorites: [{ name: "Popeyes",
                    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F06%2F09%2Fpopeyes.jpg&q=85",
                    address: "553 Bloor St W, Toronto, ON M5S 1Y6",
                    description: "Popeyes Louisiana Kitchen, Inc., also known as Popeyes and formerly named Popeyes Chicken & Biscuits and Popeyes Famous Fried Chicken & Biscuits."
                  },
                  { name: "McDonald's",
                    image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-tray.jpg",
                    address: "675 Yonge St, Toronto, ON M4Y 1T2",
                    description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States."
                  }]
      }
    );
  }
}
export { getUser };

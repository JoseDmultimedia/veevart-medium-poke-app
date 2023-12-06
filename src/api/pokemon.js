// export async function getPokemon(url) {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//           return response.json()
//         } else {
//           console.log('Respuesta de red OK pero respuesta de HTTP no OK');
//         }
//       } catch (error) {
//         console.log('Hubo un problema con la petición Fetch:' + error.message);
//       }
//   }

//I was trying to make a function to called it outside the component, almost work, but need 
//some debug to work, i use axios instead cuz, is a little faster for me to work,
//but i rahter like to use fetch 
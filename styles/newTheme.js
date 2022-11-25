import { extendTheme } from "@chakra-ui/react"

//the code below does not work for both pages and app folder examples
// const newTheme = extendTheme({
//     colors: {
//         newColor: {
//             900: "#cd33a1",
//         },
//     },
// })

//the code below works for pages folder but not for app!

const newTheme = extendTheme({
    colors: {
        newColor: "#cd33a1",
    },
})

export default newTheme
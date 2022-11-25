import { extendTheme } from "@chakra-ui/react"

//this does not work
// const newTheme = extendTheme({
//     colors: {
//         newColor: {
//             900: "#cd33a1",
//         },
//     },
// })

//this works!

const newTheme = extendTheme({
    colors: {
        newColor: "#cd33a1",
    },
})

export default newTheme
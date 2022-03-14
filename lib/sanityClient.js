import sanityClient from '@sanity/client'
export const client = sanityClient({
  projectId: 'nj3d54wz',
//   process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  token:'skVoQjeNx0Yt1xTOp5w88DhHK2CgX3eo9nUoPPuImtzCRG821OOWD3ty4GTQCKZvhbrXGAycazVHB1KjvwXYb6GEeKYrwUopQrnNcwvl7ibAJSRTwwOpc2s25o5VT5Kuv6TVvADLkBtlvUjOGuxwoOe13Ad8TnalZD8tLvJO5dJkY5YFQqQk',
//    process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: 'v1',
})

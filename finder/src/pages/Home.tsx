import React from 'react'
import { useList } from "@refinedev/core";
import {PropertyCard} from 'components'
import {Box,Typography,Stack} from '@mui/material'
import {Piecharts,TotalRevenue,PropertyReferal} from 'components'
function Home() {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
        pagination: {
            pageSize: 4,
        },
    },
});

const latestProperties = data?.data ?? [];

if (isLoading) return <Typography>Loading...</Typography>;
if (isError) return <Typography>Something went wrong!</Typography>;
  return (
    <Box >
       <Typography fontSize={25} fontWeight={700} >
       Dashboard
       </Typography>
       <Box display="flex" mt="20px" flexWrap="wrap" gap={4}>
        <Piecharts title="Property for sale" value={684} series={[75,25]} colors={['#475be8','#e4e8ef']}/>
        <Piecharts title="Property for rent" value={550} series={[60,40]  } colors={['#475ae8','#e4e8ef']}/>
        <Piecharts title="Total Customer" value={5684} series={[75,25]} colors={['#275be8','#c4e8ef']}/>
        <Piecharts title="Property for Cities" value={555} series={[75,25]} colors={['#475be8','#e4e8ef']}/>
       </Box>
       <Stack mt="25px" width="100%" direction={{xs:'column', lg:'row'}} gap={1}>
      <TotalRevenue/>
      <PropertyReferal/>
       </Stack>
       <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Latest Properties
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestProperties.map((property) => (
                        <PropertyCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                    ))}
                </Box>
            </Box>
    </Box>
  )
}

export default Home

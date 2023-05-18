import React, { useState } from 'react'
import { Button, Card, CardMedia, Container, Grid, Typography, } from '@mui/material'



export default function degerlendirmelerim() {


    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center">

                <Container
                    marginTop={50}
                    mt={10}
                    component="span" style={{ marginTop: 100, border: '1px solid black ', borderRadius: 5, width: "500px", height: "210px", marginLeft: "200px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center">
                        <Card sx={{ marginTop: "10px" }}>
                            <CardMedia
                                component="img"
                                height="190"
                                image="https://cdn.dsmcdn.com/ty281/product/media/images/20211229/10/17910100/346715585/1/1_org_zoom.jpg"
                                alt="koton"
                            >
                            </CardMedia>
                        </Card>
                        <Typography variant='caption' sx={{ marginLeft: '50px', marginBottom: '1' }}>
                            <div>Koton Paçası Yırtık Straight Fit Kot Pantolon</div>
                            <div>Beden: 38/34</div>
                            <div>Satıcı Adı: CaterPie</div>
                            <div>Teslim Tarihi:24.06.2023</div>
                            <Button href='/UrunDegerlendirme' variant='outlined' sx={{ marginTop: '30px', marginLeft: '60px' }}>
                                DEĞERLENDİR
                            </Button>
                        </Typography>

                    </Grid>
                </Container>

                <Container
                    marginTop={50}
                    mt={10}
                    component="span" style={{ marginTop: 100, border: '1px solid black ', borderRadius: 5, width: "500px", height: "210px", marginRight: "200px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center">
                        <Card sx={{ marginTop: "10px" }}>
                            <CardMedia
                                component="img"
                                height="190"
                                image="https://cdn.dsmcdn.com/ty666/product/media/images/20221227/11/247456700/130314883/5/5_org_zoom.jpg"
                                alt="puma"
                            >
                            </CardMedia>
                        </Card>
                        <Typography variant='caption' sx={{ marginLeft: '50px', marginBottom: '1' }}>
                            <div>PumaSkye Clean - Beyaz Günlük Ayakkabı</div>
                            <div>Beden: 38</div>
                            <div>Satıcı Adı: CaterPie</div>
                            <div>Teslim Tarihi:15.04.2023</div>
                            <Button href='/UrunDegerlendirme' variant='outlined' sx={{ marginTop: '30px', marginLeft: '60px' }}>
                                DEĞERLENDİR
                            </Button>
                        </Typography>

                    </Grid>
                </Container>

                <Container
                    marginTop={50}
                    mt={10}
                    component="span" style={{ marginTop: 100, border: '1px solid black ', borderRadius: 5, width: "500px", height: "210px", marginLeft: "200px" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center">
                        <Card sx={{ marginTop: "10px" }}>
                            <CardMedia
                                component="img"
                                height="190"
                                image="https://cdn.dsmcdn.com/mnresize/1200/1800/ty845/product/media/images/20230424/20/331457081/71335043/2/2_org_zoom.jpg"
                                alt="valorant"
                            >
                            </CardMedia>
                        </Card>
                        <Typography variant='caption' sx={{ marginLeft: '50px', marginBottom: '1' }}>
                            <div>3400 VP Valorant Points</div>
                            <div>Satıcı Adı: CaterPie</div>
                            <div>Teslim Tarihi:18.03.2023</div>
                            <Button href='/UrunDegerlendirme' variant='outlined' sx={{ marginTop: '30px', marginLeft: '60px' }}>
                                DEĞERLENDİR
                            </Button>
                        </Typography>

                    </Grid>
                </Container>

            </Grid>

        </div>
    )
}
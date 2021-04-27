import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';

//thicc sizes
// h: 260
// w: 250

//image
// h: 125
// w: 250

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            width: 250,
            height: 260,
            border: "3px solid #c79100",
            borderRadius: "10px",
        },
        media: {
            maxWidth: 250,
            maxHeight: 125,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {

            transform: 'rotate(180deg)',
        },

        chipRow: {
            display: 'flex',
            width: 250,
            maxHeight: '20px',
            flexFlow: 'row wrap',
            align: 'left',
            justifyContent: 'left',
            margin: '11px 0px 0px 8px',
            alignItems: 'left',
            gap: '8px',
            padding: '0px 0px 0px 0px',
        },

        chip: {
            maxHeight: '20px',
            fontFamily: 'Roboto Slab',
            // fontWeight: 'bold',
            // marginLeft: '5px',
        },

        title: {
            // maxHeight: 260,
            textAlign: 'left',
            color: '#002226',
            fontSize: '20px',
            fontFamily: 'Roboto Slab',
            margin: '-5px 0px 0px -6px',
            // maxWidth: 180,
            width: 229,
            maxHeight: 64,
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '24px',
        },

        titleFavSpan: {
            // // textOverflow: 'ellipsis',
            // overflow: 'hidden',
            // // width: 250,
            // // height: '100%',
            // display: 'flex',
            // // flexFlow: 'row wrap',
            // align: 'left',
            // justifyContent: 'left',
            // alignItems: 'left',
            // // gap: '8px',
            // // padding: '0px 0px 0px 0px',
            // // position: 'absolute',
            // wordWrap: 'break-word',
            width: 229,
            height: 64,
        },

        favIcon: {
            // position: 'relative',
            color: "#c79100",
            width: '20px',
            height: '18.35px',
            // left: '40%',
            // right: '0%',
            // top: '69.5%',
            // bottom: '0%',
            position: 'absolute',
            left: '87%',
            right: '0%',
            top: '71.4%',
            bottom: '0',
        },

        author: {
            position: 'absolute',
            width: '102px',
            height: '33px',
            textAlign: 'left',
            margin: '0px 0px 0px 10px',
            fontFamily: 'Roboto Slab',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '24px',
            /* or 200% */
            color: '#002226',
            top: '87%',
        },

        stars: {
            height: '20px',
            width: '20px',
            borderRadius: '0px',

            position: 'absolute',
            // left: '8.33%,',
            right: '89.4%',
            top: '81%',
            // bottom: '8.33%',

            color: '#002226',
        }

    }),
);

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://www.jadlonomia.com/wp-content/uploads/2016/05/IMG_1090-copy-600x900.jpg"
                // title="Paella dish"
            />

            {/*.MuiChip-label ???*/}
            <span className={classes.chipRow}>
                <Chip className={classes.chip} label="Basic" />
                <Chip className={classes.chip} label="Placeholder" />
            </span>

            {/*<span className={classes.titleFavSpan}>*/}

            {/*<div className={classes.titleFavSpan} id='text-likes-favourites'>*/}
                <CardHeader
                    classes={{
                        title: classes.title,
                    }}

                    title="Penne z bakłażanem"
                    // title="Pomidorowa z kalafiorowym ryżem"
                    // title="PSADGsdKJASHIBA ASASFS ASFASFASFASFDSA"

                />

            <div className={classes.stars} id='stars'>
                {/*jakis container na duzo gwiazdkow?*/}
                <StarBorderSharpIcon />
            </div>

            <div className={classes.author} id='author'>
                <p>Autor:</p>
            </div>

            {/*</div>*/}


            {/*</span>*/}

            {/*<CardContent>*/}
            {/*    <Typography variant="body2" color="textSecondary" component="p">*/}
            {/*        This impressive paella is a perfect party dish and a fun meal to cook together with your*/}
            {/*        guests. Add 1 cup of frozen peas along with the mussels, if you like.*/}
            {/*    </Typography>*/}
            {/*</CardContent>*/}
            <CardActions disableSpacing>
                <IconButton className={classes.favIcon} aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>


                {/*<IconButton aria-label="add to favorites">*/}
                {/*    <FavoriteIcon />*/}
                {/*</IconButton>*/}

            </CardActions>
            {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
            {/*    <CardContent>*/}
            {/*        <Typography paragraph>Method:</Typography>*/}
            {/*        <Typography paragraph>*/}
            {/*            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10*/}
            {/*            minutes.*/}
            {/*        </Typography>*/}
            {/*        <Typography paragraph>*/}
            {/*            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high*/}
            {/*            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly*/}
            {/*            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken*/}
            {/*            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and*/}
            {/*            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add*/}
            {/*            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
            {/*        </Typography>*/}
            {/*        <Typography paragraph>*/}
            {/*            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook*/}
            {/*            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to*/}
            {/*            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook*/}
            {/*            again without stirring, until mussels have opened and rice is just tender, 5 to 7*/}
            {/*            minutes more. (Discard any mussels that don’t open.)*/}
            {/*        </Typography>*/}
            {/*        <Typography>*/}
            {/*            Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
            {/*        </Typography>*/}
            {/*    </CardContent>*/}
            {/*</Collapse>*/}
        </Card>
    );
}
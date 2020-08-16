import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";


const SpotifyStyleSlider = withStyles({
     root: {
          color: '#1DB954',
          height: "100% !important"
     },
     thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover': {
               boxShadow: '0px 0px 0px 8px rgba(84, 199, 97, 0.16)'
          },
          '&$active': {
               boxShadow: '0px 0px 0px 12px rgba(84, 199, 97, 0.16)'
          }
     },
     active: {},
     valueLabel: {
          left: 'calc(-50% + 4px)'
     },
     track: {
          height: 8,
          borderRadius: 4
     },
     rail: {
          height: 8,
          borderRadius: 4
     },
     vertical: {
          '& $rail': {
               width: 8
          },
          '& $track': {
               width: 8
          },
          '& $thumb': {
               marginLeft: -8,
               marginBottom: -11
          }
     }
})(Slider)

const CustomSlider = ({ label, value, setValue }) => {
     return (
          <React.Fragment>
               {/* <Typography gutterBottom>{label}</Typography> */}
               <SpotifyStyleSlider
                    orientation="vertical"
                    defaultValue={50}
                    value={value}
                    onChange={(event, v) => {
                         setValue(v);
                    }}
               />
          </React.Fragment>
     );
};
export default CustomSlider;
import React from 'react';
import { Button} from "@chakra-ui/react"
import {action, actions} from '@storybook/addon-actions'
import '@storybook/addon-console'
import { text,boolean } from '@storybook/addon-knobs';


export default {
    title:'Chakra/Button',
    component: Button,
}
//     argTypes:{
//         colorScheme:{control :'text'},
//         children:{control:'text'},
//         onClick: {action:'Clicked'}
//     }
// }

// const Template = args =><Button {...args}/>

// export const Success = Template.bind({})
// Success.args = {
//     colorScheme:'green',
//     children: 'Success'
// }
// export const Danger = Template.bind({})
//     Danger.args = {
//         colorScheme:'red',
//         children:'Danger'


export const Success = ()=> <Button onClick = {action("clicked")} variantColor = "green">Success</Button>
export const Danger = ()=> <Button {...actions("onClick","onMouseOver")} variantColor = "red">Danger</Button>
export const Log = ()=> <Button onClick = {()=> console.log("ButtonedClicked", process.env.STORYBOOK_THEME)} variantColor = "blue">Log</Button>

export const Knobs = ()=> (
    <Button variantColor = 'blue' disabled = {boolean('Disabled', false)}>
        {text('Label', 'Button Label')}
    </Button>)


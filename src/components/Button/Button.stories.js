import React from 'react';
import Button from './Button';

export default{
    title:'form/Button',
    component:Button,
    //arrs in component level  it is all same children
    // args: {
    //     children:'Button'
    // }

}

export const Primary = () => <Button className = "primary"> Primary</Button>
export const Secondary= () => <Button className = "secondary">Secondary</Button> 
export const Danger = () => <Button className = "danger"> Danger</Button>
export const Success = () => <Button className = "success"> Success</Button>

const Template  = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children:'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children:'Long Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children:'Secondary Args'
}
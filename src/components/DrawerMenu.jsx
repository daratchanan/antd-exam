import React, { useState } from 'react';
import {
   Button,
   Drawer
} from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export default function DrawerMenu() {
   const [open, setOpen] = useState(false);
   const showDrawer = () => {
      setOpen(true)
   };

   const onClose = () => {
      setOpen(false)
   };

   return (
      <div>
         <Button
            type="text"
            icon={<MenuOutlined style={{fontSize: '20px'}}/>}
            onClick={showDrawer}
         />
         <Drawer
            title="Basic Drawer"
            placement='left'
            onClose={onClose}
            open={open}
         >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
         </Drawer>
      </div>
   )
};

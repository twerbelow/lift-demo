import React, { useEffect } from 'react';
import {
    Button,
    DataTable,
    Group,
    Header,
    Page,
    RadioButton,
    RadioGroup,
    Textbox,
} from '@d-lift/uxcomponents';
import UserService from '@/Services/UserService';
import { withPage, useAppState } from '@d-lift/core';

const Demo = ({ UXPage }) => {
    const [users, setUsers] = useAppState('users', []);
    const [user, setUser] = useAppState('user', {});

    useEffect(() => {
        (async function () {
            let data = await UserService.getAllUsers();
            setUsers(data);
        })();
    }, []);

    const handleSubmit = () => {
        let currentUsers = users;
        currentUsers.unshift(user);
        setUsers(currentUsers);
        setUser({});
    };

    return (
        <Page>
            <Header header-size="3">Demo</Header>
            <Group>
                <Textbox model="user.firstName" placeholder="First Name">
                    First Name
                </Textbox>
                <Textbox model="user.lastName" placeholder="Last Name">
                    Last Name
                </Textbox>
            </Group>
            <RadioGroup labelText="Do you like donuts?" model="user.likesDonuts">
                <RadioButton name="donuts" text="Yes" value="Yes" />
                <RadioButton name="donuts" text="No" value="No" />
            </RadioGroup>
            <Button
                mode="default"
                className="m-0"
                preIconClass="fas fa-plus-circle"
                click={() => {
                    if (!UXPage.validate().isError) handleSubmit();
                }}>
                Submit
            </Button>

            <Header header-size="3" className="mt-5">
                Users
            </Header>

            <DataTable
                col-data-keys="firstName,lastName,likesDonuts"
                col-default-headers="First Name,Last Name,Likes Donuts"
                dataCollection="users"
                emptymsg-key="Empty_message"
                hover="false"
                keyField="id"
                pagination="default"
                paginationShowTotal="true"
                paginationSizePerPage="5"
                striped={true}
                enableCSVExport
                enablePDFExport
                enableXLSExport
                enableDOCExport
                exportFileName="MyCustomExports"
            />
        </Page>
    );
};

export default withPage({ Description: 'Demo Page', ContentManager: true }, Demo);

import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Dash(props) {
    console.log(props)
    return (
        <GuestLayout>
            <p>You have been clocked in as {props.clock_number}.</p>
        </GuestLayout>
    );
}

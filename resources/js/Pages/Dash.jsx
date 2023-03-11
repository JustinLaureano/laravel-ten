import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Dash(props) {
    const employee = props.auth.employee;

    return (
        <GuestLayout>
            <p>You have been clocked in as {employee.clock_number}.</p>

            <Link href={route('books.index')}>
                Books
            </Link>
        </GuestLayout>
    );
}

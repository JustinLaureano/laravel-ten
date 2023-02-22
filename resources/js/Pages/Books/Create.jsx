import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Create(props) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: ''
    });

    function submit(e) {
        e.preventDefault();
        post(route('books.store'));
    }

    return (
        <GuestLayout>
            <form onSubmit={submit}>
                <div>
                    <TextField
                        onChange={e => setData('title', e.target.value)}
                        error={errors.title}
                        helperText={errors.title ? errors.title : ' '}
                        variant="outlined"
                    />
                </div>

                <div>
                    <Button type="submit" variant="contained">
                        Add Book
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}

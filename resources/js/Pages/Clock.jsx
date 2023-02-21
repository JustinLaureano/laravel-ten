import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Clock(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        clock_number: ''
    });

    const onHandleChange = event => {
        setData(event.target.name, event.target.value);
    }

    const submit = e => {
        e.preventDefault();

        post(route('signin'));
    }

    return (
        <GuestLayout>
            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="clock_number" value="Clock Number" />

                    <TextInput
                        id="clock_number"
                        type="test"
                        name="clock_number"
                        value={data.clock_number}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.clock_number} className="mt-2" />
                </div>

                <div>
                    <PrimaryButton processing={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

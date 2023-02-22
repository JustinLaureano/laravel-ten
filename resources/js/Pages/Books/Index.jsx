import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


export default function Index(props) {
    console.log(props)
    return (
        <GuestLayout>
            <Paper>
                <div>
                    <Link href={route('books.create')}>
                        Add Book
                    </Link>
                </div>

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {props.collection.data.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.title}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    sx={{ p: 1 }}
                >
                    <Pagination
                        page={props.collection.current_page}
                        count={props.collection.last_page}
                        renderItem={item => {
                            let url = props.collection.path;

                            if (item.type == 'previous') {
                                url = props.collection.prev_page_url;
                            }
                            else if (item.type == 'next') {
                                url = props.collection.next_page_url
                            }
                            else if (item.type == 'page') {
                                url = props.collection.links[item.page].url;
                            }

                            return (
                                <PaginationItem
                                    component={Link}
                                    href={url}
                                    {...item}
                                />
                            )
                        }}
                    />
                </Stack>
            </Paper>

        </GuestLayout>
    );
}

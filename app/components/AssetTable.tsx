import MaterialReactTable from 'material-react-table';
import type { MRT_ColumnDef } from 'material-react-table';
import React, {useMemo} from "react";
import {
    Box
} from '@mui/material';

function AssetTable({assets}: any) {
    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'Id'
            },
            {
                accessorFn: (row) => row.filename.match(/[^/\\&\?]+\.\w{3,4}(?=([\?&].*$|$))/),
                id: 'name',
                header: 'Filename'
            },
            {
                accessorFn: (row) => (row.content_length/1000).toFixed(2),
                id: 'content_length',
                header: 'Size (in KB)'
            },
            {
                accessorFn: (row) => row.content_type,
                id: 'content_type',
                header: 'Image type'
            },
            {
                id: 'filename',
                header: 'Image',
                Cell: ({ cell, row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <img
                            alt="image"
                            src={row.original.filename}
                            loading="lazy"
                            style={{ maxHeight: '100px' }}
                        />
                    </Box>
                ),
            },
        ],
        [],
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={assets}
            enableRowSelection //enable some features
            enableColumnOrdering
            enableGlobalFilter={false} //turn off a feature
        />
    );
}

export default AssetTable;
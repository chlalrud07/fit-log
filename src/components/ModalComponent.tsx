import {
    Box,
    Typography,
    Modal,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Card, DialogContent, Grid, Stack
} from '@mui/material';
import React, {useEffect} from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

interface IModalComponentProps {
    title?: string;
    isOpen: boolean;
    onModalClose: () => void;
    render: JSX.Element;
};

export default function ModalComponent (props: IModalComponentProps) {
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.onModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <DialogTitle>일정 추가</DialogTitle>
            <DialogContent>
                {props.render}
            </DialogContent>
            <DialogContent>
                <Stack spacing={2} direction="row" justifyContent="center">
                    <Button variant="outlined" onClick={props.onModalClose}>
                        취소
                    </Button>
                    <Button variant="contained" onClick={props.onModalClose}>
                        추가
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

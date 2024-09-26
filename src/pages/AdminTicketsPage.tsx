import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Button,
    Select,
    MenuItem,
    TablePagination,
    Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TicketCreator from "../components/TicketCreator";
import TicketInfo from "../components/TicketInfo";

const ticketsData = [
    { id: 1, objet: "Problème de connexion", creationDate: "2024-09-10", lastActivityDate: "2024-09-12", status: "En attente" },
    { id: 2, objet: "Question sur la facturation", creationDate: "2024-09-08", lastActivityDate: "2024-09-10", status: "Répondu" },
    { id: 3, objet: "Bug sur la page d'inscription", creationDate: "2024-09-05", lastActivityDate: "2024-09-06", status: "Fermé" },
    { id: 4, objet: "Problème de connexion", creationDate: "2024-09-10", lastActivityDate: "2024-09-12", status: "En attente" },
    { id: 5, objet: "Question sur la facturation", creationDate: "2024-09-08", lastActivityDate: "2024-09-10", status: "Répondu" },
    { id: 6, objet: "Bug sur la page d'inscription", creationDate: "2024-09-05", lastActivityDate: "2024-09-06", status: "Fermé" },
    { id: 7, objet: "Problème de connexion", creationDate: "2024-09-10", lastActivityDate: "2024-09-12", status: "En attente" },
    { id: 8, objet: "Question sur la facturation", creationDate: "2024-09-08", lastActivityDate: "2024-09-10", status: "Répondu" },
    { id: 9, objet: "Bug sur la page d'inscription", creationDate: "2024-09-05", lastActivityDate: "2024-09-06", status: "Fermé" },
    { id: 10, objet: "Problème de connexion", creationDate: "2024-09-10", lastActivityDate: "2024-09-12", status: "En attente" },
    { id: 11, objet: "Question sur la facturation", creationDate: "2024-09-08", lastActivityDate: "2024-09-10", status: "Répondu" },
    { id: 12, objet: "Bug sur la page d'inscription", creationDate: "2024-09-05", lastActivityDate: "2024-09-06", status: "Fermé" },
    { id: 13, objet: "Problème de connexion", creationDate: "2024-09-10", lastActivityDate: "2024-09-12", status: "En attente" },
    { id: 14, objet: "Question sur la facturation", creationDate: "2024-09-08", lastActivityDate: "2024-09-10", status: "Répondu" },
    { id: 15, objet: "Bug sur la page d'inscription", creationDate: "2024-09-05", lastActivityDate: "2024-09-06", status: "Fermé" },
    { id: 16, objet: "Problème de connexion", creationDate: "2024-09-10", lastActivityDate: "2024-09-12", status: "En attente" },
    { id: 17, objet: "Question sur la facturation", creationDate: "2024-09-08", lastActivityDate: "2024-09-10", status: "Répondu" }
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-head": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
    },
    "&.MuiTableCell-body": {
        fontSize: 14,
        color: theme.palette.common.white,
        backgroundColor: "#343a40",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: "#455165",
    "&:hover": {
        backgroundColor: "#343a40",
    },
}));

const AdminTicketsPage: React.FC = () => {
    const [statusFilter, setStatusFilter] = useState("");
    const [isCreatingTicket, setIsCreatingTicket] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<any>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleCreateTicket = () => {
        setIsCreatingTicket(true);
    };

    const handleRowClick = (ticket: any) => {
        setSelectedTicket(ticket);
    };

    const getStatusChipColor = (status: string) => {
        switch (status) {
            case "En attente":
                return "warning";
            case "Répondu":
                return "info";
            case "Fermé":
                return "success";
            default:
                return "default";
        }
    };

    const filteredTickets = ticketsData.filter(ticket => (statusFilter ? ticket.status === statusFilter : true));

    return (
        <PageWrapper>
            {isCreatingTicket ? (
                <TicketCreator close={() => setIsCreatingTicket(false)} />
            ) : selectedTicket ? (
                <TicketInfo ticket={selectedTicket} goBack={() => setSelectedTicket(null)} />
            ) : (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <Select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            displayEmpty
                            sx={{ color: "white", minWidth: 200, backgroundColor: "#455165" }}
                        >
                            <MenuItem value="">Tous les statuts</MenuItem>
                            <MenuItem value="En attente">En attente</MenuItem>
                            <MenuItem value="Répondu">Répondu</MenuItem>
                            <MenuItem value="Fermé">Fermé</MenuItem>
                        </Select>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCreateTicket}
                            sx={{ backgroundColor: "#E8A382", "&:hover": { backgroundColor: "#FEE2D6" } }}
                        >
                            Créer un ticket
                        </Button>
                    </div>

                    <TableContainer component={Paper} className="bg-dark-blue">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Objet</StyledTableCell>
                                    <StyledTableCell>Date de création</StyledTableCell>
                                    <StyledTableCell>Date de dernière activité</StyledTableCell>
                                    <StyledTableCell>Statut</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredTickets
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((ticket) => (
                                        <StyledTableRow
                                            key={ticket.id}
                                            hover
                                            onClick={() => handleRowClick(ticket)}
                                            className="cursor-pointer"
                                        >
                                            <StyledTableCell>
                                                {ticket.objet.length > 30 ? `${ticket.objet.substring(0, 27)}...` : ticket.objet}
                                            </StyledTableCell>
                                            <StyledTableCell>{ticket.creationDate}</StyledTableCell>
                                            <StyledTableCell>{ticket.lastActivityDate}</StyledTableCell>
                                            <StyledTableCell>
                                                <Chip label={ticket.status} color={getStatusChipColor(ticket.status)} />
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        component="div"
                        count={filteredTickets.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[6]}
                        sx={{ color: "white", mt: 2 }}
                    />
                </div>
            )}
        </PageWrapper>
    );
};

export default AdminTicketsPage;
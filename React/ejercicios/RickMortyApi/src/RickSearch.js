import { useState, useEffect } from 'react';

const RickSearch = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        search();
    }, [name, status, species, page]);

    const search = async () => {
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&page=${page}`
            );
            const data = await response.json();

            if (response.ok) {
                setData(data);
            } else {
                setError(data?.error || 'Error');
            }
        } catch (error) {
            setError(error?.error || 'Error');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setData(null);
        setError(null);
        setLoading(true);

        search();
    };

    const next = () => {
        if (page < data?.info?.pages) {
            setPage(page + 1);
        } else {
            setPage(null);
        }
    };
    const prev = () => {
        if (page > 1) {
            setPage(page - 1);
        } else {
            setPage(null);
        }
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="status">Estado:</label>
                <select
                    id="status"
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Cualquiera</option>
                    <option value="alive">Vivo</option>
                    <option value="dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>

                <label htmlFor="species">Especie:</label>
                <input
                    type="text"
                    id="species"
                    name="species"
                    onChange={(e) => setSpecies(e.target.value)}
                />

                <button disabled={loading}>
                    {loading ? 'Cargando...' : 'Cargar'}
                </button>
            </form>

            {error && <p className="error">{error}</p>}

            {data && (
                <>
                    <p className="data">
                        Se han encontrado {data.info.count} resultados:
                    </p>
                    <ul>
                        {data.results.map((char) => {
                            return (
                                <li key={char.id}>
                                    <img src={char.image} alt="Character" />
                                    <p>{char.name}</p>
                                </li>
                            );
                        })}
                    </ul>
                    {data.info.next ? (
                        <button className="NP" onClick={next}>
                            Siguiente
                        </button>
                    ) : (
                        <button style={{ display: 'none' }}>Siguiente</button>
                    )}
                    {data.info.prev ? (
                        <button className="pp" onClick={prev}>
                            Anterior
                        </button>
                    ) : (
                        <button style={{ display: 'none' }}>Anterior</button>
                    )}
                </>
            )}
        </main>
    );
};

export default RickSearch;

import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


const Calculator = () => {
  const [packageList, setPackageList] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [quantityInput, setQuantityInput] = useState();

  const [addedPackages, setAddedPackages] = useState([]);

  useEffect(() => {
    const loadPackageList = () => {
      setPackageList([
        {category: 'Cervezas', type: 'Botella 330cc', points: 20},
        {category: 'Cervezas', type: 'Botella 500cc', points: 30},
        {category: 'Cervezas', type: 'Botella 710cc', points: 40},
      ]);
    }

    const loadAvailableCategories = () => {
      setAvailableCategories([
        'Cervezas',
        'Licores',
        'Vinos',
        'Jugos',
        'Aguas',
        'Otros'
      ]);
    }

    loadPackageList();
    loadAvailableCategories();
  }, []);

  useEffect(() => {
    const filterPackages = () => {
      setFilteredPackages(packageList.filter(current_package => current_package.category === selectedCategory));
    }

    filterPackages();
  }, [selectedCategory]);

  const addPackage = () => {
    const newPackage = {
      package: selectedPackage,
      quantity: quantityInput,
      total_points: selectedPackage.points * quantityInput
    }
    setAddedPackages([...addedPackages, newPackage]);
  }

  return (
    <Container component="main" className="calculator-container">
      <Box>
        <h1>Calculadora Loopin</h1>

        <FormControl fullWidth>
          <InputLabel id="category-label">Categoría</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={selectedCategory}
            label="Age"
            onChange={e => setSelectedCategory(e.target.value)}
          >
            { 
              availableCategories.map((category) => (
                <MenuItem 
                  value={category}
                  key={category}
                >
                  {category}
                </MenuItem>
              )) 
            }
          </Select>
        </FormControl>

        {
          filteredPackages && <FormControl fullWidth>
            <InputLabel id="package-list-label">Tipo de envase</InputLabel>
            <Select
              labelId="package-list-label"
              id="package-list"
              value={selectedPackage}
              label="Age"
              onChange={e => setSelectedPackage(e.target.value)}
            >
              { 
                filteredPackages.map((current_package) => (
                  <MenuItem 
                    value={current_package}
                    key={current_package.type}
                  >
                    {current_package.type}
                  </MenuItem>
                )) 
              }
            </Select>
          </FormControl>
        }

        {
          selectedPackage && 
          <TextField 
            id="package-quantities" 
            label="Cantidad de envases" 
            variant="outlined" 
            type="number"
            onChange={e => setQuantityInput(parseInt(e.target.value))}
          />
        }

        {
          quantityInput && <div>
            <Button 
              variant="contained"
              onClick={addPackage}
            >
              Agregar envase
            </Button>
          </div>
        }

        {
          addedPackages.length > 0 && <table>
            <thead>
              <tr>
                <th>Tipo de envase</th>
                <th>Cantidad</th>
                <th>Puntos acumulados</th>
              </tr>
            </thead>
            <tbody>
              {
                addedPackages.map(current_package => (
                  <tr 
                    key={current_package.package.type}
                  >
                    <td>{current_package.package.type}</td>
                    <td>{current_package.quantity}</td>
                    <td>{current_package.total_points}</td>
                  </tr>
                ))
              }
              <tr className="total-points">
                <td></td>
                <td></td>
                <td>
                  {
                    addedPackages.reduce((accum, currentPackage) => accum + currentPackage.total_points, 0)
                  }
                </td>
              </tr>
            </tbody>
          </table>
        }
      </Box>
    </Container>
  );
}

export default Calculator;
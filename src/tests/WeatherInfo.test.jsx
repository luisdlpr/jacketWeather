// Imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/matchers';
import WeatherInfo from '../components/WeatherInfo.jsx';

describe('Simple Mode Content Tests', () => {
  it('Test content raining, warm', async () => {
    const mockWeatherInfo = {
      precipitation: true,
      temperature: {
        Imperial: {
          Value: 86,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 30,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={false} unit={'Metric'} />
    )

    expect(screen.getByText("Wear a rain jacket"))
      .toBeInTheDocument();
  });

  it('Test content raining, cold', async () => {
    const mockWeatherInfo = {
      precipitation: true,
      temperature: {
        Imperial: {
          Value: 50,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 10,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={false} unit={'Metric'}/>
    )

    expect(screen.getByText("Wear a warm rain jacket"))
      .toBeInTheDocument();
  });

  it('Test content not raining, warm', async () => {
     const mockWeatherInfo = {
      precipitation: false,
      temperature: {
        Imperial: {
          Value: 86,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 30,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={false} unit={'Metric'}/>
    )

    expect(screen.getByText("No need for a jacket"))
      .toBeInTheDocument();
  });

  it('Test content not raining, cold', async () => {
     const mockWeatherInfo = {
      precipitation: false,
      temperature: {
        Imperial: {
          Value: 50,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 10,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={false} unit={'Metric'}/>
    )

    expect(screen.getByText("Wear a warm jacket"))
      .toBeInTheDocument();
  });
});

describe('Detailed Mode Content Tests', () => {
  it('Test content raining', async () => {
    const mockWeatherInfo = {
      precipitation: true,
      temperature: {
        Imperial: {
          Value: 86,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 30,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={true} unit={'Metric'}/>
    )

    expect(screen.getByText("Precipitation"))
      .toBeInTheDocument();
  });

  it('Test content not raining', async () => {
    const mockWeatherInfo = {
      precipitation: false,
      temperature: {
        Imperial: {
          Value: 50,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 10,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={true} unit={'Metric'}/>
    )

    expect(screen.getByText("No Precipitation"))
      .toBeInTheDocument();
  });

  it('Test content imperial', async () => {
     const mockWeatherInfo = {
      precipitation: false,
      temperature: {
        Imperial: {
          Value: 86,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 30,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={true} unit={'Imperial'}/>
    )

    expect(screen.getByText("86 F"))
      .toBeInTheDocument();
  });

  it('Test content metric', async () => {
     const mockWeatherInfo = {
      precipitation: false,
      temperature: {
        Imperial: {
          Value: 50,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 10,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={true} unit={'Metric'}/>
    )

    expect(screen.getByText("10 C"))
      .toBeInTheDocument();
  }); 

  it('Test content description', async () => {
     const mockWeatherInfo = {
      precipitation: false,
      temperature: {
        Imperial: {
          Value: 50,
          Unit: 'F',
          UnitType: 18
        },
        Metric: {
          Value: 10,
          Unit: 'C',
          UnitType: 17
        }
      },
      description: "test"
    }

    render (
      <WeatherInfo weatherInfo={mockWeatherInfo} detail={true} unit={'Metric'}/>
    )

    expect(screen.getByText("test"))
      .toBeInTheDocument();
  }); 
});

const FacilityLogo = props => {
  return (
    <img
      width={props.width}
      height={props.height}
      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAORgAADkYBz+ZBAQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d17tB51fe/x997ZuRJGbkKCAkkRMVhEhWO00FNpKV5QZLKqLtuCjFDw1nMQrVhFEYVWvCBn1UtB6CO0p1Vr8wiKCHIqyxI1llhFBRFtIio7IBcdQ24k2eePmUASdvZ+LvPMb+aZ92utrISQZ+bjNsz3s39zG5mYmEBStaVJPBfYd5ofewCzgVn5z538GmATsDn/uZNfPwI8ONWPqNXeMIivg6TijFgApHDSJJ4FHAQsBhbt8PMCdh7uc8Mk7NkGdi4Fa4E1wOodfv551GpvDpRPajwLgDRAaRKPAgez83Df8ecDgdEw6YLbBtzLzqVgx5/viVrtbYGySUPPAiAVJE3i/YBnAUfmPz8LeCb1++69KjYAPwRuz398H7g9arUfCJpKGhIWAKlL+bL9Eh4f8tsH/sKQuRpknB0KQf7jTk8nSN2xAEjTSJP4UOBY4DjgBcAzgLGgobSrLcCPgG8CtwIrolb7p2EjSdVmAZB2kCbxGPAcHh/4x5JdkKf6WQusIC8EwH9FrfaWsJGk6rAAqNHSJI7IvqvfPvCXAvOChtKgrAdW8ngh+GbUaqdhI0nhWADUKPlV+c8DXgK8GDiG5l6F33TbgNuArwA3AN/2rgM1iQVAQy9N4gXAi8gG/onAPmETqaIeAm4iKwQ3Rq322sB5pIGyAGjo5Ofxf49s4L8YeDYwEjSU6mYC+C5ZGfgK8A2vH9CwsQBoKKRJ/CTgFOBk4AQgCptIQyYFbgauA74Qtdq/CZxH6psFQLWVJvGeZAP/1WRL/LPCJlJDbAZuBD4LXBe12r8NnEfqiQVAtZIm8R7Ay8iG/kuAOWETqeE2kl1A+FngS1Gr/UjgPFLHLACqvPxNeC8lG/on4W16qqb1wPVkZeDLvhFRVWcBUCXlt+udCJwGvByYHzaR1JV1wBeBa4CbvL1QVWQBUKWkSfxU4HXAGWRv0ZPq7h7gKuAfolb7F6HDSNtZABRcmsQzyJb2/4LsvP6MsImkgdhKdr3Ap4Dro1Z7a+A8ajgLgIJJk3gx2Xf6CXBg4DhSme4FWsBVUau9OnQYNZMFQKVKk3gm8ArgLLL79X1Aj5psguz5AlcA10at9qOB86hBLAAqRZrE+wFvBN4E7B84jlRF9wMfBz4RtdoPhA6j4WcB0EClSXwYcC7wWmBu4DhSHWwArgYujVrtu0OH0fCyAGgg0iQ+Dngr2ZP6fNue1L1tZI8e/kjUat8aOoyGjwVgSCxcumwG8MfAUfmPpwNjXWxiD7Lv0OeSPV2vl3PzI6MwOjbC2IhDXyrMBGzbMsGWbVkp6OWgPUH21MIN+Y9unli4Bfgx8L38x1fHVy73DoYhYAEYAguXLnsOcCXw3NBZJA297wBnjq9c/l+hg6g/fpdWcwuXLns98G0c/pLK8Vzg2/mxRzXmCkCNLVy67GnA7XhxnaTybQCeNb5y+U9CB1FvXAGot0/h8JcUxlyyY5BqyhWAmlq4dNkiwCeISQpt8fjK5WtCh1D3XAGoryNDB5AkPBbVlgWgvn43dABJwmNRbVkA6utJoQNIEjA/dAD1xgJQX3eEDiBJwG2hA6g3FoD6+kHoAJJE9hwS1ZAFoL7uAB4MHUJSo/1wfOXyX4YOod5YAGpqfOXyjWRv2ZOkEDYDp4YOod5ZAGpsfOXya4CbQueQ1Ejv9H0A9WYBqL8/AT5Ob28Ik6RuPQQk4yuXfyR0EPXHJwEOiYVLlx0LvI3soRyLsdxJKs4W4E7gP4D3jq9c/qvAeVQAC8AQWrh02bynzmTJuxZMvGnhTE4DZuz477+Swt8/MNLz9n//sBn86TGz+o0pqSD/fNtm/uPurT1//vX7TfDi6Am/vXX8Ua75m/tGPvbzzdyRX3ekITIWOoCKd9cRE88DrgAOm+zff3dDf9s/ZJ9RTj7KvzpSVaz47y38B70XgAUzYcmcJ/z2jCVzSP5wz4njgLOAW3regSrJo/gQSZN4L+BDwBlA79/iS9LjDgP+PU3iq4C/ilrtX4cOpGJ4nnhIpEm8jOzZAGfi8JdUrBGyY8sd+bFGQ8AVgJpLk3gB8AkgDp1F0tBbCPxbmsRt4I1Rq702dCD1zhWAGkuT+GTg+zj8JZUrBr6fH4NUU64A1FCaxPOAS4GzQ2eR1Fj7AdemSXw5cG7Uaq8PHUjdcQWgZtIkfi7wHRz+kqrhbOA7+bFJNeIKQE2kSTxK9qCfi4CZgeNI0o4OB76VJvH5wIejVntb6ECanisANZAm8VOBm4FLcPhLqqaZZMeom/NjlirOAlBxaRK/ErgdOD50FknqwPHA7fmxSxXmKYCKSpN4PvB3wOmBo0hSt/YGPpcm8aeBv4xa7XWB82gSrgBUUJrEhwPfxuEvqd5OB76dH9NUMRaAikmT+BSy4b8kdBZJKsASshJwSugg2pmnACoiv8r/IuAd+ChfScMlApanSfwB4HzvEqgGVwAqIE3ifYEbgL/G4S9pOI2QHeNuyI95CswCEFj+8IxVwImhs0hSCU4EVvngoPAsAAGlSXw6sAI4JHAUSSrTIcCK/BioQLwGIIA0iWcBlwFvCJ1FkgKZA7TSJH4ecE7Uam8OHahpXAEoWZrEBwC34PCXJMiOhbfkx0aVyAJQojSJlwDfAl4QOoskVcgLyN4l4O3PJbIAlCRN4uOBbwCLAkeRpCpaBHwjP1aqBBaAEqRJfBpwI7BX6CySVGF7ATfmx0wNmAVgwNIkfi9wNb7FT5I6MRO4Oj92aoC8C2BA8iv9rwRODZ1FkmrogjSJfwc40zsEBsMVgAFIk3gvsiV/h78k9e5UslMCnj4dAAtAwdIkXkx2sd8LA0eRpGHwQrKLAxeHDjJsLAAFSpP4aLLb/LyVRZKKs4TsNsGjQwcZJhaAgqRJfBzw78D+obNI0hDaH/j3/FirAoxMTEyEzlB7aRL/MfAFYN6t6+CWdSP8eBPcvREe2ho6nSTV0z4z4LA58PTZ8ML5Exw3H4D1wClRq/3VsOnqzwLQpzSJXwF89sEtzL547QjXp6ETSdJwOimCdy2YYN8xNgGvjlrta0NnqjMLQB/SJH4NcM2DWxg7+b9HeGBL6ESSNNz2G4PrfmeCfcfYApwWtdr/EjpTXXkNQI/SJD4T+Cdg7OK1Dn9JKsMDW+DitSOQPcfmn/JjsXpgAehBmsTnAFcAo7euw2V/SSrR9Sncug7IZtgV+TFZXbIAdClN4vOBjwIjkF3wJ0kq1w7H3hHgo/mxWV2wAHQhTeJLgPfv+Hs/3hQojCQ12CTH3vfnx2h1yALQofwv1tt3/f27NwYII0kNt5tj79stAZ2zAHQgX1p6wvAH7/OXpBCmOPa+3dMBnbEATCO/uOT90/5BSVJVvN8LA6dnAZhCfnvJpaFzSJK6dqm3CE7NArAb+UN+Lie/2l+SVCsjwOX5sVyTsABMIn+87zX49ZGkOhsFrsmP6dqFA24X+Yt9Pkv2lClJUr2NAZ/Nj+3agQVgB/lrJr8AzA6dRZJUmNnAF3yV8M4sALk0iY8Grgfmhc4iSSrcPOD6/FgvfBsgAGkSLwa+Bezf7WcPv6O/awTHVy7v6/OSVFcLly7r6/N3HdHT/LofeH7Uaq/ua+dDoPErAGkS70X2nX/Xw1+SVDv7k60E7BU6SGiNLgBpEs8C2sCS0FkkSaVZArTzGdBYjS4AwJXAC0OHkCSV7oVkM6CxGlsA0iR+L3Bq6BySpGBOzWdBIzWyAKRJfBpwQegckqTgLshnQuM0rgCkSXw8DV/2kSTt5Mp8NjRKowpAmsRLgOXAzNBZJEmVMRNYns+IxmhMAUiT+ADgy0Djb/2QJD3BXsCX81nRCI0oADvc7rcocBRJUnUtokG3BzaiAACXAS8IHUKSVHkvIJsZQ2/oC0CaxKcDbwidQ5JUG2/IZ8dQG+oCkCbxc4FPhs4hSaqdT+YzZGgNbQFIk3hfsiv+54TOIkmqnTlkdwbsGzrIoAxlAUiTeBT4Z+CQ0FkkSbV1CPDP+UwZOkP5Pwq4CDgxdAhJUu2dSDZThs7QFYA0iU8B3hE6hyRpaLwjny1DZagKQJrEhwNXAyOhs0iShsYIcHU+Y4bG0BSANInnkz3sJwqdRZI0dCKyhwTNDx2kKENTAIC/Axr1HGdJUqmWkM2aoTAUBSBN4lcCp4fOIUkaeqfnM6f2al8A0iR+KnB56BySpMa4PJ89tTYWOkA/8nszrwH2Dp1FqppNX/w8Ew890Nc2RvbZj9kv/5OCEklDY2/gmjSJT4ha7W2hw/Sq1gUAeBtwfOgQUhVt+c8VbP35mr62MeOgRRYAaXLHk82gD4YO0qvangLIn9E8lA9nkCTVwkV1fl9ALQtAmsTzyB71OzN0FklSY80ke1TwvNBBelHLAgBcCgzVAxkkSbV0ONlMqp3aFYA0iU8Gzg6dQ5Kk3Nn5bKqVWhWANIkXAFeFziFJ0i6uymdUbdSqAACfAPYLHUKSpF3sRzajaqM2BSBN4mVAHDqHJEm7EeezqhZqUQDSJN4L+FjoHJIkTeNj+cyqvFoUAOBDwMLQISRJmsZCsplVeZUvAGkSvxA4I3QOSZI6dEY+uyqt0gUgTeI5wBXASOgskiR1aAS4Ip9hlVXpAgC8FzgsdAhJkrp0GNkMq6zKFoA0iZ8NvDV0DkmSevTWfJZVUiULQJrEM4Arqf/bCiVJzTUGXJnPtMqpZAEA3gIcHTqEJEl9OppsplVO5QpAmsQHAxeGziFJUkEuzGdbpVRxif0SoJavVpT6tnkzW9f+spBNTTy6uZBtbL1ndd/bGd1nP0bm79n3dqSamkc2214TOsiORiYmJkJneEyaxMcCt4bO0Y3D7+jvDsXxlcsLSqJhsPWe1TxywbmhYxRuzmmvZ9bxLwodQxWzcGl/T82964jqzK8OHRe12itCh9iuMqcA0iQeAS4LnUOSpAG5LJ91lVCZAgC8FjgmdAhJkgbkGLJZVwmVKABpEs8H/jZ0DkmSBuxv85kXXCUKAPBOYEHoEJIkDdgCspkXXPACkCbxYmD4rnqSJGly5+azL6jgBQD4MDA7dAhJkkoym2z2BRW0AOSvS+zvPhBJkupnWehXBgcrAGkSj+Jtf5Kk5rosn4VBhFwB+DPgqID7lyQppKPIZmEQQQpAmsRjwAUh9i1JUoVckM/E0oVaATgdODTQviVJqopDyWZi6UovAGkSzwLeXfZ+JUmqqHfns7FUIVYAzgQq91pESZICOZhsNpaq1AKQJvEc4F1l7lOSpBp4Vz4jS1P2CsAbgANL3qckSVV3INmMLE1pBSBN4j2Ad5S1P0mSauYd+awsRZm3HrwZ2L/E/Um1M7rPfsw57fWFbGvzF/+VbQ8/2F+evfdl1stf2XeWscOP6HsbUgPsTzYrLyljZ6UUgDSJI+DtZexLqrOR+Xsy6/gXFbKtR7/2FeizABSZR1JH3p4m8SejVjsd9I7KOgVwDrBPSfuSJKmu9iGbmQM38AKQn88o5X+MJElD4JwyrgUoYwXgdcDeJexHkqRhsDfZ7ByogRaANIlnAG8Z5D4kSRpCb8ln6MAMegUgBhYPeB+SJA2bxWQzdGAGXQDeNuDtS5I0rAY6QwdWANIkPg5YOqjtS5I05Jbms3QgBrkC8NYBbluSpCYY2CwdSAFIk/gw4ORBbFuSpAY5OZ+phRvUCsC5A9y2JElNMUo2Uwey4UKlSbwf8NqitytJUkO9Np+thRrEd+lvBOYOYLuSJDXRXLLZWqhCC0CaxDOBNxW5TUmSxJvyGVuYolcAXoGv/JUkqWj7k83YwhRdAM4qeHuSJClT6IwtrACkSbwYOKGo7UmSpJ2ckM/aQowVtSHgDGCkwO1J6sMe7/to6AiSijVCNmvPL2JjhawA5G8sSorYliRJ2q2kqLcEFnUK4CTgwIK2JUmSJncg2cztW1EF4C8K2o4kSZpaITO37wKQJvFTgZcUkEWSJE3vJfns7UsRKwCvAwo5HyFJkqY1g2z29qWvApAm8SjZFYmSJKk8Z+QzuGf9rgCcCBzc5zYkSVJ3DiabwT3rtwCc1ufnJUlSb/qawT0XgDSJ5wIv72fnkiSpZy/PZ3FP+lkBeCkwv4/PS5Kk3s0nm8U96acAvLqPz0qSpP71PIt7KgBpEu9BQU8ikiRJPTspn8ld63UF4GXAvB4/K0mSijGPbCZ3rdcC4PK/JEnV0NNM7roApEm8Jz76V5KkqnhJPpu70ssKwMnAnB4+J0mSijeHbDZ3pZcC4PK/JEnV0vVs7qoApEn8JOBF3e5EkiQN1IvyGd2xblcATgFmdfkZSZI0WLPIZnTHui0AXZ9jkCRJpehqRndcANIkHgNO6DqOJEkqwwn5rO5Ix38Q+D0g6j6PQrh+9W9Zdd/G0DG69p7nPznYvq/4/sOsfWRLsP33YsEeY5x15N5B9u3Xq3vv+9avgu27V0cfMIeTFnd9h5nCiMhm9dc7+cPdFIAX9xRHQay6byOf+/FvQsfoWsgCcOOaddz18KZg++/F4XvPDjbQ/Hp1r47/TQIWgHp5MR0WgG6uAbAASJJUbR3P6o4KQJrEC4Bn9xxHkiSV4dn5zJ5WpysALwJGes8jSZJKMEKHz+vptAC4/C9JUj10NLOnLQBpEo8CJ/YdR5IkleHEfHZPqZMVgOcB+/SfR5IklWAfstk9pU4KgK/+lSSpXqad3Z0UAM//S5JUL9PO7ikLQJrEEXBMYXEkSVIZjsln+G5NtwLwgg7+jCRJqpZRshk+5R+YyrHFZZEkSSWacoZPVwCOKzCIJEkqz5QzfLcFIH+l4NLC40iSpDIsner1wFOtADwHmFd8HkmSVIJ5ZLN8UlMVAM//S5JUb7ud5VMVAM//S5JUb7ud5a4ASJI0vLpbAUiT+FCgo/cJS5KkylqQz/Qn2N0KgN/9S5I0HCad6bsrAJ7/lyRpOEw603dXAKZ8fKAkSaqNSWf6EwpAmsSzgGcMPI4kSSrDM/LZvpPJVgCWALt9cpAkSaqVMbLZvpPJCsCzBp9FkiSV6Amz3QIgSdLw66gAHFlCEEmSVJ4nzHZXACRJGn5TrwCkSbwfsLC0OJIkqQwL8xn/mF1XAPzuX5Kk4bTTjN+1AHj+X5Kk4bTTjHcFQJKkZphyBcACIEnScJq8AKRJPAo8s/Q4kiSpDM/MZz2w8wrAwcDc8vNIkqQSzCWb9cDOBWBR6VEkSVKZFm3/xY4FYHH5OSRJUokem/WuAEiS1ByLtv/CFQBJkprDFQBJkhpo0fZfuAIgSVJz7LwCkCbxLODAYHEkSVIZDsxn/mMrAAcx+auBJUnS8Bglm/mPDX2X/yVJaobF8HgBWBQuhyRJKtEigLH8H1wBGDLvef6Tec/znxw6Rq3828sPCh2hVvx6de8Hpz0tdAQJXAGQJKmRFsHjBWBBuBySJKlEC+DxArBvwCCSJKk8+4IFQJKkprEASJLUQFkBSJN4LjA3cBhJklSOuWkSzx3F7/4lSWqafS0AkiQ1jwVAkqQGsgBIktRAFgBJkhrIAiBJUgNZACRJaiALgCRJDbTvKLBH6BSSJKlUe4wCs0OnkCRJpZo9CswKnUKSJJVqlisAkiQ1z2wLgCRJzeMpAEmSGshTAJIkNdDsMSwAQ+n61b9l1X0bQ8fo2nue/+Rg+77i+w+z9pEtwfbfiwV7jHHWkXsH2bdfr+6971u/CrbvXh19wBxOWrxn6Bgq3uwxPAUwlFbdt5HP/fg3oWN0LWQBuHHNOu56eFOw/ffi8L1nBxtofr26V8f/JgELwHDyFIAkSQ3kXQCSJDWQdwFIktRAngKQJKmBZo+GTiBJkso3CtTrMl5JktSvTaPA5tApJElSqTa7AiBJUvNssgBIktQ8ngKQJKmBPAUgSVIDeQpAkqQG8hSAJEkN5CkASZIayFMAkiQ1kKcAJElqIE8BSJLUQJtGgUdCp5AkSaV6ZBR4MHQKSZJUqgctAJIkNY8FQJKkBrIASJLUQBYASZIayAIgSVIDWQAkSWogC4AkSQ304GjUam8ANoROIkmSSrEharU3jOb/4CqAJEnN8CCABUCSpGaxAEiS1EA7FYC1AYNIkqTyrIXHC8CacDkkSVKJ1sDjBWB1uBySJKlEq8EVAEmSmmYNuAIgSVLT7LQC8HNgW7gskiSpBNvIZn5WAKJWezNwb8hEkiRp4O7NZ/5jKwDgaQBJkobdY7N+xwKwpvwckiSpRGu2/8IVAEmSmsMVAEmSGmjN9l+4AiBJUnO4AiBJUgOt2f6LHQvAPcCG0qNIkqQybCCb9QCMTExMPPZv0iT+T+CYAKFq6/A7Rvr6/PjK5QUlkaR6Wbh0WV+fv+uIien/kHZ0W9Rq/4/t/zC6y7+8veQwkiSpHDvNeAuAJEnNMGUB+H6JQSRJUnl2mvGuAEiS1Ay7XwGIWu0HgPFS40iSpEEbz2f8Y3ZdAQBXASRJGjZPmO2TFQCvA5Akabg8Yba7AiBJ0vDraAXAAiBJ0nDpqADcCWwZfBZJklSCLWSzfSdPKABRq70Z+FEZiSRJ0sD9KJ/tO5lsBQDgmwMOI0mSyjHpTN9dAbh1gEEkSVJ5Jp3puysAKwYYRJIklWfSmT5pAYha7Z8CawcaR5IkDdrafKY/we5WAMBVAEmS6m63s3yqAuB1AJIk1dtuZ7krAJIkDa+eVgD+C1hffBZJklSC9WSzfFK7LQBRq70FWDmIRJIkaeBW5rN8UmPTfPhW4Phi86gMq+7fwE9//YQHP1Xeq57+pGD7vuln6/j1pq3B9t+LvWbP4MRD5gfZt1+v7n3ux78Jtu9eHbrXLI7ef27oGOrNlNfyTVcAvA6gpq7/73W1PNiELACX3/4wdz28Kdj+e3H43rODDTS/Xt1737d+FWzfvXrV059kAaivKWf4VNcAQPb4wG3FZZEkSSXYxjSP9Z+yAEStdgrcVmQiSZI0cLflM3y3plsBAPhKQWEkSVI5pp3dnRSAGwoIIkmSyjPt7O6kAHwbeKj/LJIkqQQPkc3uKU1bAKJWextwUxGJJEnSwN2Uz+4pdbICAF4HIElSXXQ0szstADcCE71nkSRJJZggm9nT6qgARK32WuC7/SSSJEkD9918Zk+r0xUA8DSAJElV1/GstgBIkjQ8BlIAvgFM+VQhSZIUTEo2qzvScQHIXyl4cy+JJEnSwN081et/d9XNCgDAdV3+eUmSVI6uZnS3BeALQP1eMi9J0nDbTDajO9ZVAYha7d/Q4f2FkiSpNDfmM7pj3a4AAHy2h89IkqTB6Xo291IArgM29vA5SZJUvI30cI1e1wUgarV/i68IliSpKm7IZ3NXelkBAE8DSJJUFT3N5F4LwJeA9T1+VpIkFWM92UzuWk8FIGq1HwGu7+WzkiSpMNfnM7lrva4AgKcBJEkKredZ3E8B+DKwro/PS5Kk3q0jm8U96bkARK32BuCLvX5ekiT15Yv5LO5JPysAANf0+XlJktSbvmZwvwXgJuCePrchSZK6cw/ZDO5ZXwUgarW3AVf1sw1JktS1q/IZ3LN+VwAA/gHYWsB2JEnS9LaSzd6+9F0Aolb7F/hoYEmSynJDPnv7UsQKAMCnCtqOJEmaWiEzt6gCcD1wb0HbkiRJk7uXgp7EW0gBiFrtrUCriG1JkqTdauUzt29FrQBAdjfARIHbkyRJj5ugwDvvCisAUau9Gri5qO1JkqSd3JzP2kIUuQIAcEXB25MkSZlCZ2zRBeBa4P6CtylJUtPdTzZjC1NoAYha7UeBjxe5TUmSxMfzGVuYolcAAD4B9Px2IkmStJMNZLO1UIUXgKjVfgC4uujtSpLUUFfns7VQg1gBALgU6OslBZIkiW1kM7VwAykAUat9N3DdILYtSVKDXJfP1MINagUA4CMD3LYkSU0wsFk6sAIQtdq3AisHtX1JkobcynyWDsTYoDac+zDwrwPehyZx9rP25lVPj0LHqJWP/MEBbNxSr6dZzxkbCbZvv17d+/zLDgq6/17sPWdG6AhN9uFBbnzQBaANrAYWD3g/2sUB88Y4YN6g/+8dLouiWaEj1Ipfr+49Y5/ZoSOoPlaTzdCBGeQ1ANvfEvjRQe5DkqQh9NGi3vq3OwMtALl/AB4uYT+SJA2Dh8lm50ANvABErfYjwGWD3o8kSUPisnx2DlQZKwCQFYCHStqXJEl19RAlfdNcSgGIWu0U+GAZ+5IkqcY+mM/MgStrBQDgY/iqYEmSdud+sllZitIKQH4+4wNl7U+SpJr5QBnn/rcrcwUA4JPAvSXvU5KkqruXbEaWptQCELXaG4GLy9ynJEk1cHE+I0tT9goAwJXAPQH2K0lSFd1DNhtLVXoBiFrtzcD7y96vJEkV9f58NpYqxAoAwKeBnwbatyRJVfFTsplYuiAFIGq1twAXhti3JEkVcmE+E0sXagUA4P8C3wu4f0mSQvoe2SwMIlgBiFrtbcA5ofYvSVJg5+SzMIiQKwBErfYtwPKQGSRJCmB5PgODCVoAcm8DNoUOIUlSSTaRzb6ggheAqNVeDVwaOockSSW5NJ99QQUvALm/AdaGDiFJ0oCtJZt5wVWiAESt9jrgr0PnkCRpwP46n3nBVaIA5K4GbgsdQpKkAbmNbNZVQmUKQNRqT+BtgZKk4XVOPusqoTIFACBqtVcAnwmdQ5Kkgn0mn3GVUakCkDsPWB86hCRJBVlPNtsqpXIFIGq17wEuCJ1DkqSCXJDPtkqpXAHIfRRYFTqEJEl9WkU20yqnkgUgarW3AmcCQd6QJElSAbYAZ+YzrXIqWQAAolb7u8BHQueQJKlHH8lnWSVVtgDk3gvcHTqEJElduptshlVWpQtA1GpvBM4CKnPfpCRJ05gAzspnWGVVugDAY68Mvip0DkmSOnRV6Ff9dqLyBSD3V8B46BCSJE1jnGxmVV4tCkDUav8aeHPoHJIkTePN+cyqvFoUAICo1V4OtEPnkCRpN9r5rKqFsdABuvRG4PeB/UIHUfHW4MZ3kAAACFpJREFUrd/A11d+jx/evYY7fvIzfj5+P0xMf/3nps2Psn7DRjZufpRNmzazddu2EtLW08TEBNu2TWQ/51/b0ZERRkZGGB3NftbkZoyOMnv2LObMmsm8uXOYPWvm9B8aGeGghftzxNMO4ZmHLeJ/Lj2K+fPmDj6sQniAbEbVxshEBwfYKkmT+GTg2tA5tjv8jv4OmOMra1MWB+rmFas475LLufe+B0JHkQbmwAP245LzzuaEY48OHaUSFi5d1tfn7zqiUvPrFVGrfV3oEN2ozSmA7fIv8OWhc6g47/zQpzj13Isd/hp69973AKeeezHv/NCnQkdRsS6v2/CHGhaA3LnAXaFDqH83r1hF6/M3hI4hlar1+Ru4eYWvOxkSd5HNpNqpZQGIWu31wJ8Cj4bOot6tW7+B8y5xMUfNdN4ll7Nu/YbQMdSfR4E/zWdS7dSyAABErfZ3gPND51Dvvr7yey77q7Huve8Bvr7ye6FjqD/n57OolmpbAHIfBr4WOoR688O714SOIAXlfwO19jWyGVRbtS4AUau9DTgNeDh0FnXvjp/8LHQEKSj/G6ith4HT8hlUW7UuAABRq/0L4OzQOdS99LePhI4gBbXukVqeOhacnc+eWqt9AQCIWu1/BT4dOoe684xDDw4dQQrqqCVPCx1B3ft0PnNqbygKQO4vgTtDh1DnjjhsUegIUlDPeaYFoGbuJJs1Q2FoCkDUaq8DYiANnUWdWXrUEkZHffSsmmne3Dk876gloWOocykQ57NmKAxNAQCIWu27gNcClXo+pCb3tEVP4cxXvyx0DCmIi956Bk/eZ6/QMdSZCeC1+YwZGkNVAACiVvsLwAdC51Bnzjv7NRy0cP/QMaRSvewPX8BrXv5HoWOocx/IZ8tQGboCkDsfuCl0CE1v3tw5XHvFxfzxcceEjiIN3MyxGZzzulfy8QvPCR1FnbuJIX3oXO3eBtipNIn3BVYBhwxyP74NsDjXfnUFn/nS/+NHP7mHtQ88FDqOVIiRkREOPnB/nn3E03jL617F4b9zUOhIlVGDtwH+DDg6arUfHPSOQhjaAgCQJvFzgRXAnEHtwwIwGL/57Tp+sfYB2OXv509/9kvOPv/Snre78Mn78ObX9nfQqZN3ffjKvj5/8dvOLChJ9X3s6uWM/6r34nn5Redy6CFP2fk3R0Y4aOH+RPPn9ZluOFW8AGwEjq3zo36nMxY6wCBFrfZ30iR+A9AKnUXdedKe83nSnvML3+78PeZxQoNON/RbAJr0tfr0578CfRSAQw95Cs98+uICEymwNwzz8IfhvQbgMVGr/Wngk6FzSJJq45P57BhqQ18AcucA3wwdQpJUed8kmxlDrxEFIGq1N5M9JGhN4CiSpOpaQ/awn82hg5ShEQUAIGq17wNeCvw6dBZJUuX8GnhpPisaoTEFACBqte8ElgGPhs4iSaqMR4Fl+YxojEYVAICo1f4a0Jx7myRJ0zkznw2N0rgCABC12tcAF4bOIUkK7sJ8JjROIwsAQNRqvxf4x9A5JEnB/GM+CxqpsQUgdyZwS+gQkqTS3ULDTwc3ugDscHtgoy78kKSGu5MG3e63O40uAABRq/1r4CTg/tBZJEkDdz9wUn7sb7TGFwCAqNVeTfaMgDR0FknSwKRk9/qvDh2kCiwAuajVXkW2ErA+dBZJUuHWk33nvyp0kKqwAOwgarVvBU4BNoXOIkkqzCbglPwYr5wFYBdRq/1V4NXAltBZJEl92wK8Oj+2awcWgElErfa1wGnAttBZJEk92waclh/TtQsLwG5Erfa/AGcDE6GzSJK6NgGcnR/LNQkLwBSiVvtK4NzQOSRJXTs3P4ZrNywA04ha7cuAd4fOIUnq2LvzY7emYAHoQNRqXwR8MHQOSdK0PpgfszUNC0CHolb7PCwBklRlH8yP1eqABaAL+V8sTwdIUvW82+HfHQtAl/Klpbfg3QGSVAUTwFtc9u+eBaAH+cUlZ+FzAiQppG3AWV7w1xsLQI/y20v+PHQOSWqwP/dWv95ZAPrgAyYkKRyPwf2xAEiS1EAWAEmSGsgCIElSA1kAJElqIAuAJEkNZAGQJKmBLACSJDWQBUCSpAayAEiS1EAWAEmSGsgCIElSA1kAJElqIAuAJEkNZAGQJKmBLACSJDWQBUCSpAayAEiS1EAWAEmSGsgCIElSA1kAJElqIAuAJEkNZAGQJKmBLACSJDWQBUCSpAayAEiS1EAWAEmSGsgCIElSA1kAJElqIAuAJEkNZAGQJKmBLACSJDWQBUCSpAayAEiS1EAWAEmSGsgCIElSA1kAJElqIAuAJEkNZAGQJKmBLACSJDWQBUCSpAayAEiS1EAWAEmSGsgCIElSA1kAJElqIAuAJEkNZAGQJKmBLACSJDWQBUCSpAayAEiS1EAWAEmSGsgCIElSA1kAJElqIAuAJEkNNDIxMRE6Q2UsXLrsSODPgCOB3wUODptIktSHXwE/yH9cP75y+Y2B81SKBQBYuHTZbOB84DxgZuA4kqTB+Azwv8dXLr8/dJAqaHwBWLh02SjwdeDY0FkkSQN3H/AsS4DXAAD8JQ5/SWqKA4D/EzpEFTR6BWDh0mVPAe4C9gidRZJUqhc3/ZqApq8AHI/DX5Ka6KTQAUJregF4VugAkqQgfjd0gNAsAJKkJrIAhA4gSZLK1/QCcHvoAJKkIH4QOkBoFgBJUhNZAEIHCOxrwCOhQ0iSSndD6AChNboAjK9c/kvgXaFzSJJK9aXxlcstAKEDVMDfAStCh5AklWId8L9Ch6iCxheA8ZXLtwF/BFwEPBo4jiRpcG4Dnju+cvnq0EGqoNGPAt6VrwOWpKHzU2AVcCvw9+Mrl/uNXu7/A3/gAnJ3LWucAAAAAElFTkSuQmCC'
    ></img>
  );
};
export default FacilityLogo;

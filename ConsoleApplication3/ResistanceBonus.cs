using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileGenerator
{
    class ResistanceBonus : BaseBonus
    {
        public DaocEnums.Resistances res { get; set; }
        public int max { get; set; }

    }
}
